import React from "react";

const ElementPage = () => {
  return (
    <div className='flex'>
        <div className='h-auto w-64 p-5
            bg-myColors-background border-r border-myColors-gray'>
                <button className='card-button w-full h-40 bg-myColors-primary'>
                    test1
                </button>
                <button className='card-button w-full h-40 mt-5'>
                    test2
                </button>
                <button className='card-button w-full h-20 mt-5 text-large font-bold'>
                    +
                </button>
        </div>
        <div className='m-3'>
            <h1>(제목) TEXT</h1>
            <h2>소제목</h2>
            <p>본문 글씨 (기본)</p>
            <p className='font-bold'>본문 글씨 (bold)</p>
            
            <p className='text-myColors-primary'>포인트색</p>
            <p className='text-myColors-gray'>회색</p>
            <p className='text-myColors-typeA'>typeA</p>
            <p className='text-myColors-typeB'>typeB</p>
            <p className='text-myColors-typeC'>typeC</p>
            <p className='text-myColors-typeD'>typeD</p>
            <p className='text-myColors-typeE'>typeE</p>

            <button className='button-basic text-white bg-myColors-primary'>버튼</button>

            <div className='card'>
                <input type='text'
                    placeholder="제목"
                    className='w-11/12 mx-6 outline-none text-large font-bold'/>
            </div>

            <div className='card'>
                <h1 className='mt-2 mx-6'>카드 제목</h1>

                <div className='card-bundle'>
                    <div className='card-title'>
                        <h2>제목1</h2>
                    </div>
                    <div className='card-body'>
                        <p>본문</p>
                    </div>
                </div>

                <div className='card-bundle'>
                    <div className='card-title flex'>
                        <h2>제목</h2>
                        <h2 className='text-myColors-primary'>2</h2>
                    </div>
                    <div className='card-body'>
                        <input type='text'
                            placeholder='input(text) example'
                            className='input-text w-full h-auto
                                hover:outline-myColors-primary
                                focus:outline-myColors-primary'/>
                        <textarea // 기존 높이 이상으로 늘어나면 늘어나게 해야함
                            placeholder="textarea example"
                            rows={3}
                            className='input-text w-full mt-3
                                hover:outline-myColors-primary
                                focus:outline-myColors-primary'/>
                    </div>
                </div>

            </div>

            <div className='mx-6'>
            <button className='button-basic text-white bg-myColors-primary float-left'>버튼1</button>
            <button className='button-basic text-white bg-myColors-primary ml-3 float-left'>버튼2</button>
            <button className='button-basic text-myColors-primary bg-white
                border-2 border-myColors-primary ml-3 float-right'>버튼3</button>
            </div>
        </div>
    </div>
  );
}

export default ElementPage;