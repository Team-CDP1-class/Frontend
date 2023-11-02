import React from "react";

const ResultPage = () => {
  return (
    <div className="m-3 ">
      <div className="card">
        <div className="flex">
            <h1 className="mt-2 ms-6 text-myColors-primary">Card Titile</h1>
            <h1 className="ms-3 mt-2">분석 결과</h1>
        </div>

        <div className="card-bundle">
          <div className="card-title">
            <h2>스토리 키워드</h2>
          </div>
          <div className="card-body">
            <p>본문</p>
          </div>
        </div>

        <div className="card-bundle">
          <div className="card-title flex">
            <h2>유사한 문학 1 :</h2>
            <h2 className="ms-2 text-myColors-primary">문학 제목</h2>
          </div>
          <div className="card-body">
            <p>'문학 제목'은 주요내용이 ADfjdlfjqoeoi22.</p>
            
            <div className="mt-8">
                <p className="font-bold">유사도와 판단 근거</p>
                <p className="my-3">여기 그래프</p>
                
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
