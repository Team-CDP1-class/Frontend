import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      {/* 메인 배너 */}
      <div className="text-center py-40 bg-myColors-background">
        <h1 className="my-3 text-myColors-primary text-6xl">SYSTEM NAME</h1>
        <h2 className="mb-10">AI 스토리 분석 및 추천 시스템</h2>

        <p>한국어 이야기 구조와 감정 분석</p>
        <p>한국어 이야기 작성 방향 탐색 도움 제공</p>

        {/* 비회원 -> 로그인/회원가입, 회원 -> 스토리 카드 */}
        <Link to="/cardpage/postcard">
          <button
            onClick="location.href=''"
            className="my-5 button-basic text-white bg-myColors-primary font-bold border-2 border-myColors-primary "
          >
            시작하기
          </button>
        </Link>
      </div>

      {/* 소개 */}
      <div className="py-20 px-16 flex justify-center border-t">
        <div className="w-mainIntro flex flex-col">
          <div className="w-full text-left p-5 mb-10">
            <h2 className="mb-3">OpenAI를 이용한 스토리 분석</h2>
            <p>OpenAI ChatGPT 3.5를 이용한 한국어 이야기에서의 맥락과 감정 분석</p>
            <p>스토리 키워드 선별, 유사 작품 추천, 주요 맥락 및 감정 분석 결과 제공</p>
          </div>

          <div className="w-full p-5 text-right mb-10">
            <h2 className="mb-3">감정 분석 결과 시각화</h2>
            <p>작성한 스토리 카드와 유사한 작품의 키워드 별 유사도 제공</p>
            <p>단계 별 스토리 감정 분석 결과 제공 및 비교</p>
            <p>전반적인 스토리의 감정 및 분위기 분석 후, 감정 스코어와 판단 근거 제공</p>
          </div>

          <div className="w-full text-left p-5">
            <h2 className="mb-3">스토리 카드 저장</h2>
            <p>작성한 스토리 카드 내용 저장 (최대 3개)</p>
          </div>
        </div>
      </div>

      {/* 주요 기능 */}
      <div className="w-screen text-center py-16 border-t">
        <h1 className="pb-7">주요 기능</h1>
        <div className="flex justify-center">
          <div className="card bg-white w-96">
            <h2 className="my-3">스토리 카드 분석</h2>
            <p className="mb-5">스토리 아이디어를 카드에 간략하게 작성</p>
            <p className="font-bold">{">"} 스토리 키워드 선별</p>
            <p className="font-bold">{">"} 유사 문학 추천</p>

            <Link to="/cardpage">
              <button
                className="w-full button-basic text-myColors-primary bg-white
                border-2 border-myColors-primary mt-5 mb-3 hover:text-white hover:bg-myColors-primary hover:font-bold"
              >
                바로가기
              </button>
            </Link>
            {/* -> 스토리카드 */}
          </div>
          <div className="card bg-white w-96">
            <h2 className="my-3">AI 스토리 전개 분석</h2>
            <p className="mb-5">스토리 트리트먼트 작성</p>
            <p className="font-bold">{">"} 단계 별 주요 맥락 및 감정 분석</p>
            <p className="font-bold">{">"} 전반적인 감정 및 분위기 분석</p>

            <Link to="/treatment">
              <button
                className="w-full button-basic text-myColors-primary bg-white
                border-2 border-myColors-primary mt-5 mb-3 hover:text-white hover:bg-myColors-primary hover:font-bold"
              >
                바로가기
              </button>
            </Link>
            {/* -> 스토리카드 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
