import React,{useRef} from 'react';
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, getAuth,updateProfile } from 'firebase/auth';
import app  from '../firebase';
import {ref,set,getDatabase} from "firebase/database";


function SignUp(){
  
  const {register, handleSubmit, formState: { errors }, watch} = useForm();

  const PasswordRef = useRef();
  //해당 필드값 변경될때마다 최신 값 반환 =>값 기억
  PasswordRef.current= watch('password')

  const auth= getAuth(app)
  const db= getDatabase(app)

  const SignForm = async (data) => {
    try {
      // Firebase Auth로 회원가입 처리
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User created:", createdUser);
      
      await updateProfile(createdUser.user,{
        Name: data.name,});
        return createdUser;
    
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };
  
  
 
  
  const onSubmit = async(data) => {
    try {
      // 회원가입 처리
      const createdUser = await SignForm(data);
      console.log("회원가입 처리 데이터: ", data);
  
      // Realtime Database에 사용자 정보 저장 (비밀번호 제외)
      await set(ref(db, 'users/' + createdUser.user.uid), {
        name: data.name,
        email: data.email,
        // 비밀번호는 저장하지 않음
      });
  
      console.log("사용자 정보가 Realtime Database에 저장되었습니다.");
    } catch (error) {
      console.error("회원가입 처리 중 오류 발생: ", error);
    }
  };


    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>

       {/* 이름 필드 */}
       <label htmlFor="name">이름</label>
        <input 
          name="name" 
          type="text" 
          id="name" 
          placeholder='이름'
          {...register("name", {
            required: true, // 필수 여부
            minLength: {
              value: 1, 
            }, 
          })}
        />
        {errors.name?.type === 'required' && (<span>이름은 필수 정보입니다</span>)}
        {errors.name?.type === 'minLength' && (<span>최소 1글자 이상 입력해주세요</span>)}

        {/* 이메일 필드 */}


        <label htmlFor="email">이메일</label>
        <input 
          name="email" 
          type="email" 
          id="email" 
          placeholder='이메일' 
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
          })}
        />
        {errors.email?.type === 'required' && (<span>반드시 이메일을 입력하여주세요</span>)}
        {errors.email?.type === 'pattern' && (<span>올바르게 입력해주세요</span>)}


        {/* 비밀번호 필드 */}
        <label htmlFor="password">비밀번호</label>
        <input 
          name="password" 
          type="password" 
          id="password" 
          {...register("password", {
            required: true,
            minLength: {
              value: 6
            },
          })}
        />
        {errors.password?.type === 'required' && (<span>비밀번호를 입력해주세요</span>)}
        {errors.password?.type === 'minLength' && (<span>최소 6자 이상 입력해주세요</span>)}

        {/* 비밀번호 재확인 필드 */}
        <label htmlFor="passwordCheck">비밀번호 재확인</label>
        <input 
          type="password" 
          id="passwordCheck"
          {...register('passwordCheck', {
            required: true,
            validate: (value) => value === PasswordRef.current,
          })}
          placeholder='비밀번호 확인'
          minLength={6}
        />
        {errors.passwordCheck?.type === 'required' && (<span>비밀번호를 한 번 더 입력해주세요</span>)}
        {errors.passwordCheck?.type === 'validate' && (<span>비밀번호가 일치하지 않습니다</span>)}


        {/* 회원가입 버튼 */}
        <input type="submit" value="회원가입" /> 
      </form>
    </div>
  );
        }

export default SignUp;
