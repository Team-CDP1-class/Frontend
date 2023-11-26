import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/thunkFunction";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = ({ email, nickname, password, confirmpassword, name, birth }) => {
    if (password !== confirmpassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    const body = {
      email,
      nickname,
      name,
      password,
      birth,
    };
    dispatch(registerUser(body)).then((res) => {
      console.log(res.payload.statusCode);
      if (res.payload.statusCode === "CREATED") {
        navigate("/login");
      }
    });
    reset();
  };

  const userEmail = {
    required: "필수 필드입니다.",
  };
  const userName = {
    required: "필수 필드입니다.",
  };
  const userNickName = {
    required: "필수 필드입니다.",
  };
  const userBirth = {
    required: "필수 필드입니다.",
  };
  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다.",
    },
  };
  const confirmUserPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다.",
    },
  };

  return (
    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div className="border p-6 text-black rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center">회원가입</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2 ">
            <label htmlFor="email" className="text-sm font-semibold text-gray-800 ">
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md  hover:outline-myColors-primary
              focus:outline-myColors-primary "
              placeholder="이메일 주소"
              {...register("email", userEmail)}
            />
            {errors?.email && (
              <div>
                <span className="text-red-500">{errors.email.message}</span>
              </div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-800">
              이름
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              placeholder="이름"
              {...register("name", userName)}
            />
            {errors?.name && (
              <div>
                <span className="text-red-500">{errors.name.message}</span>
              </div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="nickname" className="text-sm font-semibold text-gray-800">
              닉네임
            </label>
            <input
              type="text"
              id="nickname"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              placeholder="닉네임"
              {...register("nickname", userNickName)}
            />
            {errors?.nickname && (
              <div>
                <span className="text-red-500">{errors.nickname.message}</span>
              </div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-sm font-semibold text-gray-800">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              placeholder="비밀번호"
              {...register("password", userPassword)}
            />
            {errors?.password && (
              <div>
                <span className="text-red-500">{errors.password.message}</span>
              </div>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="confirmpassword" className="text-sm font-semibold text-gray-800">
              비밀번호 확인
            </label>
            <input
              type="password"
              id="confirmpassword"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              placeholder="비밀번호 확인"
              {...register("confirmpassword", confirmUserPassword)}
            />
            {errors?.confirmpassword && (
              <div>
                <span className="text-red-500">{errors.confirmpassword.message}</span>
              </div>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="birth" className="text-sm font-semibold text-gray-800">
              생년월일
            </label>
            <input
              type="date"
              id="birth"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              {...register("birth", userBirth)}
            />
            {errors?.birth && (
              <div>
                <span className="text-red-500">{errors.birth.message}</span>
              </div>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white duration-200 bg-myColors-primary rounded-md  hover:bg-myColors-primary/80"
            >
              회원가입
            </button>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            아이디가 있다면?{" "}
            <a href="/login" className="font-medium hover:underline">
              로그인
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
