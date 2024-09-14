

export function SearchResults({ location = [], searching, onLocationClick }) {
  return (
    <article aria-busy={searching}>
      {searching ? (
        <p>잠시만 기다려주세요. 위치를 검색하고 있습니다.</p>
      ) : (
        <>
          <header>총 {location.length}개의 폐의약품 수거함 위치가 검색되었습니다.</header>
          <ul>
            {location.length > 0 ? (
              location.map((loc, index) => (
                <li key={index} onClick={() => onLocationClick(loc)} style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}>
                  {loc["약국명칭"]} - {loc["약국소재지(도로명)"]}
                </li>
              ))
            ) : (
              <li>위치 정보가 없습니다.</li>
            )}
          </ul>
        </>
      )}
    </article>
  );
}