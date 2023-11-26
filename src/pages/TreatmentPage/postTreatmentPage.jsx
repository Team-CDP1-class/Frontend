import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { analysisTreatment } from "../../store/thunkFunction";
import { useNavigate } from "react-router-dom";

const PostTreatmentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = async({ content }) => {
    const body = {
      content,
    };
    console.log(body);
    await dispatch(analysisTreatment(body.content));
    reset();
    navigate('/treatment/result');
    window.location.reload();
  };

  return (
    <form className="m-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="card">
        <div className="card-body">
          <div className="mb-2">
            <textarea // 기존 높이 이상으로 늘어나면 늘어나게 해야함
              type="text"
              id="content"
              placeholder="이야기의 트리트먼트를 입력해주세요"
              rows={25}
              className="input-text w-full mt-3
                                hover:outline-myColors-primary
                                focus:outline-myColors-primary"
              {...register("content")}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="button-basic text-myColors-primary bg-white
          border-2 border-myColors-primary mr-6 float-right"
        >
          분석하기
        </button>
      </div>
      <button type="reset" className="button-basic text-white bg-myColors-primary ml-6 float-left">
        초기화
      </button>
    </form>
  );
};

export default PostTreatmentPage;
