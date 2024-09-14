import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ selectedLocation }) => {
  if (!selectedLocation) {
    return <p>지도에서 선택된 위치가 없습니다.</p>;
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyDxjowJ_55aEEKQIB3TMp91sNn_oxXSJvw">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
        zoom={15}
      >
        <Marker position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;