import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="w-full flex">
        <div className="footerBundle w-32">
          <p className="pb-2">기능</p>
          <button className="footerMenu w-full">스토리 카드</button>
          <button className="footerMenu w-full">스토리 전개 분석</button>
        </div>

        <div className="footerBundle w-32">
          <p className="pb-2">사용자</p>
          {/* 비회원 */}
          <button className="footerMenu w-full">로그인/회원가입</button>

          {/* 회원 */}
          {/* <button className='footerMenu w-full'>마이페이지</button>
          <button className='footerMenu w-full'>로그아웃</button> */}
        </div>
      </div>

      <div className="text-right w-96">
        <h2 className="pb-3">SYSTEM NAME</h2>
        <p className="text-xs font-extralight text-myColors-gray">2023-2 CDP1 PROJECT</p>
        <p className="text-xs font-extralight text-myColors-gray pb-3">TEAM 5 | 권다운 | 송혜경 | 제유나 | 하재현</p>
        <a
          href="https://github.com/Team-CDP1-class"
          className="text-xs font-extralight text-myColors-gray my-1"
          target="_blank"
        >
          GitHub 바로가기
        </a>
      </div>
    </div>
  );
};

export default Footer;
