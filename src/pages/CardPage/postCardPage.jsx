import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { deleteStoryCard, editStoryCard, getStoryCard, postStoryCard } from "../../store/thunkFunction";
import { useDispatch, useSelector  } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const PostCardPage = (props) => {
  const storyCard = props.storyCard;
  const len = useSelector((state) => state.cardStory.storyCardData);
  const params = useParams();
  const navigate = useNavigate();
  let deleteBtn = [];

  const [btn, setBtn] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  const handleEdit=()=>{
    setBtn("Edit");
  }
  const handleReset=()=>{
    setBtn("Reset");
  }
  const handleDelete=()=>{
    setBtn("Delete");
  }
  const handleAnalysis=()=>{
    setBtn("Analysis");
  }
  const onSubmit = async ({ storycard_name, premise, setting, characters, outline }) => {
    const body = {
      storycard_name,
      premise,
      setting,
      characters,
      outline,
    };

    if(btn == "Edit") {
      console.log("Edit");
      let data = {"postId":storyCard.id, "body":body};
      await dispatch(editStoryCard(data));
      navigate(`/cardpage/postcard/${params.postId}`);
      window.location.reload();
    }
    if(btn == "Reset") {
      console.log("Reset");
      reset();
    }
    if(btn == "Delete") {
      console.log("Delete");
      await dispatch(deleteStoryCard(storyCard.id));
      await dispatch(getStoryCard());
      if(len.length == 1)
        navigate('/cardpage/postcard');
      else
        navigate('/cardpage/postcard/0');
      window.location.reload();
    }
    if(btn == "Analysis") {
      console.log("Analysis");
    }
  };

  return (
    <form className="m-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="card">
        <input
          type="text"
          id="storycard_name"
          placeholder="제목"
          defaultValue={storyCard.storycard_name}
          className="w-11/12 mx-6 outline-none text-large font-bold"
          
          {...register("storycard_name")}
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
              defaultValue={storyCard.premise}
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
              defaultValue={storyCard.setting}
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
              defaultValue={storyCard.characters}
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
              defaultValue={storyCard.outline}
              {...register("outline")}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 ml-6 mr-6">
            <button type="submit"
                    className="button-basic text-myColors-primary bg-white border-2 border-myColors-primary float-left"
                    onClick={handleEdit}>저장</button>
            {/* <button className="button-basic text-myColors-primary bg-white border-2 border-myColors-primary ml-3 float-left"
                    onClick={handleReset}>초기화</button> */}
            
            <button className="button-basic text-myColors-primary bg-white border-2 border-myColors-primary ml-3 float-left"
                  onClick={handleDelete}>삭제</button>
            
            <button
              className="button-basic text-white bg-myColors-primary float-right"
              onClick={handleAnalysis}>
              분석하기
            </button>
          </div>
    </form>
  );
};

export default PostCardPage;
