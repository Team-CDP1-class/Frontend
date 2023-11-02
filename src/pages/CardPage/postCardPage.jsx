import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postStoryCard } from "../../store/thunkFunction";

const PostCardPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  const onSubmit = ({ cardname, premise, setting, characters, outline }) => {
    const body = {
      cardname,
      premise,
      setting,
      characters,
      outline,
    };
    console.log(body);
    dispatch(postStoryCard(body));
    reset();
  };

  return (
    <form className="m-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="card">
        <input
          type="text"
          placeholder="제목"
          className="w-11/12 mx-6 outline-none text-large font-bold"
          {...register("premise")}
        />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="mb-2">
            <label htmlFor="premise" className="text-sm font-semibold text-gray-800">
              <h2>Premise</h2>
            </label>
            <textarea // 기존 높이 이상으로 늘어나면 늘어나게 해야함
              type="text"
              id="premise"
              placeholder="이야기의 전제를 입력해주세요"
              rows={4}
              className="input-text w-full mt-3
                                hover:outline-myColors-primary
                                focus:outline-myColors-primary"
              {...register("premise")}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="setting" className="text-sm font-semibold text-gray-800">
              <h2>Setting</h2>
            </label>
            <textarea // 기존 높이 이상으로 늘어나면 늘어나게 해야함
              type="text"
              id="setting"
              placeholder="이야기의 배경을 입력해주세요"
              rows={4}
              className="input-text w-full mt-3
                                hover:outline-myColors-primary
                                focus:outline-myColors-primary"
              {...register("setting")}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="characters" className="text-sm font-semibold text-gray-800">
              <h2>Characters</h2>
            </label>
            <textarea // 기존 높이 이상으로 늘어나면 늘어나게 해야함
              type="text"
              id="characters"
              placeholder="이야기에 등장하는 인물에 대해 입력해주세요. (성격, 특성 등등)"
              rows={4}
              className="input-text w-full mt-3
                                hover:outline-myColors-primary
                                focus:outline-myColors-primary"
              {...register("characters")}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="outline" className="text-sm font-semibold text-gray-800">
              <h2>Outline</h2>
            </label>
            <textarea // 기존 높이 이상으로 늘어나면 늘어나게 해야함
              type="text"
              id="outline"
              placeholder="이야기에 등장하는 인물에 대해 입력해주세요. "
              rows={4}
              className="input-text w-full mt-3
                                hover:outline-myColors-primary
                                focus:outline-myColors-primary"
              {...register("outline")}
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
    </form>
  );
};

export default PostCardPage;
