import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getStoryCard, loginUser } from "../../store/thunkFunction";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  const onSubmit = async ({ email, password }) => {
    if (!email) {
      return alert("이메일을 적어주세요");
    }
    if (!password) {
      return alert("비밀번호를 적어주세요");
    }
    const body = {
      email,
      password,
    };
    await dispatch(loginUser(body));
    reset();
    
    dispatch(getStoryCard());
  };

  return (
    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div className="mt-20 border p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center">로그인</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-800">
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              {...register("email")}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="text-sm font-semibold text-gray-800">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              {...register("password")}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white duration-200 bg-myColors-primary  rounded-md hover:bg-myColors-primary/80"
            >
              로그인
            </button>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            아직 회원이 아니신가요?{" "}
            <a href="/register" className="font-medium hover:underline">
              회원가입
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
