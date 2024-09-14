import {useState} from 'react'
import Home from "./Pages/Home";
import Search from "./Pages/Search.jsx";
import Map from './Pages/Map.jsx'
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";


import {Routes, Route} from "react-router-dom";



//1."/" : 모든 리스트를 조회하는 home
//2. "/search" : 검색 페이지
//3. "/map": 지도 페이지
function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/Map" element={<Map selectedLocation={selectedLocation} />} />
 <Route path="/Search" element={<Search setSelectedLocation={setSelectedLocation} />} />
 <Route path= "/SignUp" element={<SignUp />} />
 <Route path= "/Login" element={<Login />} />

 </Routes>
  );
}

export default App;
