import React from "react";

const MainPage = () => {
  return (
    <div className="m-3 ">
      <div className="card">
        <h1 className="mt-2 mx-6">카드 제목</h1>

        <div className="card-bundle">
          <div className="card-title">
            <h2>제목1</h2>
          </div>
          <div className="card-body">
            <p>본문</p>
          </div>
        </div>
      </div>
      <div className="card-bundle">
        <div className="card-title">
          <h2>제목1</h2>
        </div>
        <div className="card-body">
          <p>본문</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
