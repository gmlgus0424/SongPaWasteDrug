import React from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      console.log("User logged in: ", user);
      // 로그인 성공 후 필요한 작업 수행
    } catch (error) {
      console.error("Login error: ", error.message);
      // 에러 핸들링
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
