import styled from 'styled-components';
const HeaderLayout=styled.header`
 position: fixed;
  width: 100%:
  background-color: white;
  z-index: 999;


`;

//헤더 전체
const HeaderSpace=styled.div`
 display: flex;
 -webkit-box-align: center;
 align items: center;
 -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    max-width: 1090px;
    height: 60px;
    margin: 0px auto;

`


 
const NavSpace  = styled.nav`
display: flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
}


`;

const Logo = styled.div`
text-decoration: none;
font-weight: bold;
font-size: 1.6rem;
color: black;
border-bottom: none;
cursor: pointer;
outline: none`;




const LoginNav= styled.nav`





`;
const Login= styled.a`


    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: auto;
    height: 40px;
    padding: 4px 18px;
    outline: none;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    text-align: center;
   border-bottom : none;
   
    color:black`;

const SignUp= styled.a`
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
width: auto;
height: 40px;
padding: 4px 18px;
outline:none;
border-bottom : none;
font-size: 1.6rem;
font-weight: bold;
cursor: pointer;
outline: none;
text-align: center;
color: rgb(31, 65, 255);`;



 
 const Header = () => {
  return (
  <HeaderLayout>
    <HeaderSpace>
      <Logo>헬시</Logo> 
      <NavSpace>
      <Login>로그인</Login>
      <SignUp>회원가입</SignUp>
      </NavSpace>
     </HeaderSpace>
    
  </HeaderLayout>
  );
  }

  export default Header;