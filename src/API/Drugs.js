import axios from 'axios';

// 2초 지연 함수
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// API 불러오기
async function fetchDrugs(query) {
  const API_URL = 'https://api.odcloud.kr/api/15077652/v1/uddi:4c6a9da3-6474-4db4-90dc-90c414821502';
  const API_KEY = 'g1KwMI26ABCNZEsw1WBDDDiOwnHzzV7Cu/lvEdaJYLlMoa2MdCTS5LQ0G37m3e9iA823NaNmz+eHhfyv3XEknQ==';
  const PER_PAGE = 200;

  try {
    await delay(2000); // 2초 지연
    const response = await axios.get(API_URL, {
      params: {
        serviceKey: API_KEY,
       perPage: PER_PAGE,
        returnType: 'json', // 필요한 경우 추가
      },
      headers: {
        // 서비스키를 헤더로 보낼 경우
        Authorization: `Bearer ${API_KEY}`,
      }
    });
    return response.data.data; // 응답의 data 속성만 반환
  } catch (error) {
    console.error("Error fetching drugs:", error.response ? error.response.data : error.message);
    return []; // 오류 발생 시 빈 배열 반환
  }
}

export default fetchDrugs;