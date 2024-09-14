import { useEffect, useState } from 'react';
import { SearchBox } from '../Components/SearchBox';
import { SearchResults } from '../Components/SearchResult';
import Map from "../Pages/Map"
import fetchDrugs from '../API/Drugs';

function Search() {
  const [query, setQuery] = useState("");
  const [drugs, setDrugs] = useState([]);
  const [searching, setSearching] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    if (query) {
      setSearching(true);
      fetchDrugs(query)
        .then((drugsData) => {
         // console.log("Fetched Drugs Data:", drugsData); // 전체 데이터 확인
  
          // 필터링 로직 점검
          const filteredDrugs = drugsData.filter((drug) =>
            drug["약국소재지(도로명)"].includes(query)
          );
  
         // console.log("Filtered Drugs:", filteredDrugs); // 필터링된 데이터 확인
  
          setDrugs(filteredDrugs);
          setSearching(false);
        })
        .catch((error) => {
          console.error("Error fetching drugs:", error);
          setSearching(false);
        });
    } else {
      setDrugs([]); // 검색어가 없을 때는 결과를 초기화
    }
  }, [query]);

  const handleLocationClick = (drug) => {
 
    //위도 경도가 없어서 기본값 넣어줌
    const defaultLat = 37.5665; // 서울 위도
    const defaultLng = 126.9780; // 서울 경도

     // 위도와 경도 값이 있는지 확인 후 기본 값 사용
  const lat = parseFloat(drug["위도"]) || defaultLat;
  const lng = parseFloat(drug["경도"]) || defaultLng;

     // 유효한 위도/경도 값인지 확인
  if (isNaN(lat) || isNaN(lng)) {
    console.error("Invalid latitude or longitude:", lat, lng);
    return; // 유효하지 않은 경우 아무것도 하지 않음
  }

    const location = {
      name: drug["약국명칭"],
      address: drug["약국소재지(도로명)"],
      lat: lat,
      lng: lng,
      
    };

    setSelectedLocation(location);
  }

  return (
    <>
      <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResults location={drugs} searching={searching} onLocationClick={handleLocationClick}/>
      <Map selectedLocation={selectedLocation} />
    </>
  );
}

export default Search;
