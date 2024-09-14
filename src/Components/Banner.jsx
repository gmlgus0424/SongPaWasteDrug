import styled from "styled-components";


const BannerLayout=styled.div`
position: relative;
    width: 100%;
    height: 700px;
    background-color: rgb(164, 144, 110);
    background-position: 53% 100%;
    background-repeat: no-repeat;
    background-size: cover;



`;

const BannerBox=styled.div`
margin: 0px 0px 15px;`;


const Title1=styled.h2`    
margin: 0px;
font-weight: 700;
color: rgb(255, 255, 255);
font-size: 4rem;
line-height: 6.4rem`;

const Title2= styled.h2`
margin: 0px;
font-weight: 700;
color: rgb(255, 255, 255);
font-size: 4rem;
line-height: 6.4rem`;


const SubTitle=styled.p`
margin: 0px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    font-size: 1.6rem;
    line-height: 2.9rem;`


const SpaceDiv=styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 50px 0px 0px`;

const SearchBtn=styled.button`
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
width: 180px;
height: 60px;
padding: 18px 0px;
border-radius: 50px;
line-height: 60px;
font-size: 1.6rem;
font-weight: bold;
cursor: pointer;
outline: none;
text-align: center;
border: none;
background-color: rgb(255, 255, 255);
color: rgb(31, 65, 255)`;

const Banner =()=>{
  return <BannerLayout>
    <BannerBox>
      <Title1>모든 것들을 </Title1>
    <Title2>새롭게 버리는 공식</Title2> 
    </BannerBox>

<SubTitle>주민센터 방문</SubTitle>
<SpaceDiv>
  <SearchBtn>검색하기</SearchBtn>
</SpaceDiv>
  </BannerLayout>
}

export default Banner;