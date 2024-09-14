import Header from "../Components/header";
import styled from "styled-components";
import Banner from "../Components/Banner";
import CenterMode from "../Components/carousel";

const HomeLayout = styled.div`
  width: 100%;
  min-height: calc(100vh - 300px);
  margin: 0px auto;
  padding: 105px 0px 0px;
`;

const Home = () => {
  return (
    <>
      <Header />
      <HomeLayout>
        <Banner />

        <div className="container">
          <p className="소제목">어떻게 버려야 할 지 고민은 그만</p>
          <h2 className="제목">헬시가 알려드리는 버리는 공식들을 통해</h2>
          <h2 className="제목2">폐의약품을 간단하게 버려보세요</h2>

          <div className="큰박스">
            <div className="박스1">
              <div className="박스1-1">
                <div className="제목 박스">
                  <h5 className="제목 박스 1">안전하게</h5>
                </div>
                <p className="제목박스 1의 소제목">
                  그냥 버리지 마시고 안전하게 버리세요
                </p>
              </div>
            </div>

            <div className="박스2">
              <div className="박스2-1">
                <div className="제목 박스">
                  <h5 className="제목 박스 2-2">안전하게</h5>
                </div>
                <p className="제목박스 1의 소제목">
                  그냥 버리지 마시고 안전하게 버리세요
                </p>
              </div>
            </div>

            <div className="박스3">
              <div className="박스3-1">
                <div className="제목 박스">
                  <h5 className="제목 박스 3-2">안전하게</h5>
                </div>
                <p className="제목박스 1의 소제목">
                  그냥 버리지 마시고 안전하게 버리세요
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 스와이퍼 */}
        <div className="swipe-container">
          <div className="swipe-wrapper">
            <p className="swipe-title">수 많은 사람들이 공유했어요</p>
            <h2 className="swipe-subtitle">100000건의 리뷰</h2>
            <h2 className="swipe-subtitle">헬시가 증명합니다</h2>
          </div>

          <div className="carousel">
            <CenterMode />
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default Home;