import React from 'react';
import ResultGraph from "./resultGraph";

const data1 = {
    'keywords': [
        {
            'keyword': '법학 졸업과 진로 시작에 대한 도전',
            'reason': '주어진 premise와 outline에 따르면, 주인공 Liza가 법학 졸업 후 고향으로 돌아가 법조인으로서의 경력을 시작하면서 직면하는 어려움이 핵심적인 플롯 포인트임.',
        },
        {
            'keyword': '작은 미국 마을에서의 이야기',
            'reason': '설정이 미국의 작은 마을로 주어졌으며, 이곳에서 법조인으로서의 경력 시작과 이에 따른 고민이 전개됨.',
        },
        {
            'keyword': '자매 간의 인간관계',
            'reason': '주인공 Liza의 언니인 Peyton Turner가 캐릭터로 주어졌으며, 이들 간의 인간관계가 중요한 플롯 포인트로 다뤄질 것으로 예상됨.',
        },
        {
            'keyword': '부패한 법체계에 대한 심각한 문제의식',
            'reason': ' 주어진 premise에서 법체계의 문제에 대한 심각한 어려움을 겪는 것이 강조되어 있으므로, 이러한 문제에 대한 인식과 대응이 흐름의 핵심이 될 것임.',
        },
        {
            'keyword': '도전과 성장의 과정',
            'reason': ' 주인공 Liza가 법조인으로서의 경력을 시작하며 직면하는 어려움을 극복하고 成長(성장)하는 과정이 주요 흐름임.',
        },
    ],
    'similarStory':[
        {
            'title': '그랩 더 돈(Grab the Money)',
            'story': '\'그랩 더 돈\'은 법조인의 도전과 부패한 사회체계에 대한 비판을 주제로 다룸.',
            'similarity': [
                {
                    'percent': 70,
                    'reason': '주인공의 법조인으로서의 도전과 어려움을 다룸.'
                },
                {
                    'percent': 80,
                    'reason': '작은 마을의 고립된 환경에서 벌어지는 이야기를 다룸.'
                },
                {
                    'percent': 75,
                    'reason': '자매 간의 복잡한 관계를 다루며, 이에 대한 해결을 시도함.'
                },
                {
                    'percent': 80,
                    'reason': '부패한 법체계에 대한 심각한 문제의식을 갖고, 이를 해결하려고 시도함.'
                },
                {
                    'percent': 90,
                    'reason': '주인공의 도전과 성장 과정을 다룸. '
                },
            ],
        },
        {
            'title': '그랩 더 돈(Grab the Money)',
            'story': '\'그랩 더 돈\'은 법조인의 도전과 부패한 사회체계에 대한 비판을 주제로 다룸.',
            'similarity': [
                {
                    'percent': 70,
                    'reason': '주인공의 법조인으로서의 도전과 어려움을 다룸.'
                },
                {
                    'percent': 80,
                    'reason': '작은 마을의 고립된 환경에서 벌어지는 이야기를 다룸.'
                },
                {
                    'percent': 75,
                    'reason': '자매 간의 복잡한 관계를 다루며, 이에 대한 해결을 시도함.'
                },
                {
                    'percent': 80,
                    'reason': '부패한 법체계에 대한 심각한 문제의식을 갖고, 이를 해결하려고 시도함.'
                },
                {
                    'percent': 90,
                    'reason': '주인공의 도전과 성장 과정을 다룸. '
                },
            ],
        },
        {
            'title': '그랩 더 돈(Grab the Money)',
            'story': '\'그랩 더 돈\'은 법조인의 도전과 부패한 사회체계에 대한 비판을 주제로 다룸.',
            'similarity': [
                {
                    'percent': 70,
                    'reason': '주인공의 법조인으로서의 도전과 어려움을 다룸.'
                },
                {
                    'percent': 80,
                    'reason': '작은 마을의 고립된 환경에서 벌어지는 이야기를 다룸.'
                },
                {
                    'percent': 75,
                    'reason': '자매 간의 복잡한 관계를 다루며, 이에 대한 해결을 시도함.'
                },
                {
                    'percent': 80,
                    'reason': '부패한 법체계에 대한 심각한 문제의식을 갖고, 이를 해결하려고 시도함.'
                },
                {
                    'percent': 90,
                    'reason': '주인공의 도전과 성장 과정을 다룸. '
                },
            ],
        },

    ],
}

const valueName = ['A', 'B', 'C', 'D', 'E']
let keywords = data1['keywords']
let similarStory = data1['similarStory']

function show_similarStory() {
    let result = [];

    for(let i = 0; i<similarStory.length; i++) {
        let graphData = [];

        for(let j=0; j<5; j++) {
            graphData.push({name:valueName[j], uv:similarStory[i]['similarity'][j]['percent'],})
        }

        result.push(
            <div className="card-bundle">
                <div className="card-title flex">
                    <h2>{'유사한 문학 '+(i+1)+' : '}</h2>
                    <h2 className="ms-2 text-myColors-primary">{similarStory[i]['title']}</h2>
                </div>
                <div className="card-body">
                    <p className="mt-2">{similarStory[i]['story']}</p>
                    
                    <div className="mt-8">
                        <p className="mb-8 font-bold">유사도와 판단 근거</p>
                        <div className="mb-4 w-full flex justify-center">
                            <ResultGraph data={graphData}/>
                        </div>

                        <div>
                            <div className="mb-4">
                                <p className="mb-2 text-myColors-typeA">{"A. "+keywords[0]['keyword']+" ("+similarStory[i]['similarity'][0]['percent']+"%)"}</p>
                                <p className="mx-2">{similarStory[i]['similarity'][0]['reason']}</p>
                            </div>
                            <div className="mb-4">
                                <p className="mb-2 text-myColors-typeB">{"B. "+keywords[1]['keyword']+" ("+similarStory[i]['similarity'][1]['percent']+"%)"}</p>
                                <p className="mx-2">{similarStory[i]['similarity'][1]['reason']}</p>
                            </div>
                            <div className="mb-4">
                                <p className="mb-2 text-myColors-typeC">{"C. "+keywords[2]['keyword']+" ("+similarStory[i]['similarity'][2]['percent']+"%)"}</p>
                                <p className="mx-2">{similarStory[i]['similarity'][2]['reason']}</p>
                            </div>
                            <div className="mb-4">
                                <p className="mb-2 text-myColors-typeD">{"D. "+keywords[3]['keyword']+" ("+similarStory[i]['similarity'][3]['percent']+"%)"}</p>
                                <p className="mx-2">{similarStory[i]['similarity'][3]['reason']}</p>
                            </div>
                            <div className="mb-4">
                                <p className="mb-2 text-myColors-typeE">{"E. "+keywords[4]['keyword']+" ("+similarStory[i]['similarity'][4]['percent']+"%)"}</p>
                                <p className="mx-2">{similarStory[i]['similarity'][4]['reason']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return result;
}

const ResultPage = () => {
  return (
    <div className="m-3">
      <div className="card">
        <div className="flex">
            <h1 className="mt-2 ms-6 text-myColors-primary">Card Titile</h1>
            <h1 className="ms-3 mt-2">분석 결과</h1>
        </div>

        <div className="card-bundle">
          <div className="card-title">
            <h2>스토리 키워드</h2>
          </div>
          <div className="card-body mt-4">
            <div className="mb-6">
                <p className="font-bold mb-2 text-myColors-typeA">{"A. "+keywords[0]['keyword']}</p>
                <p className="mx-2">{keywords[0]['reason']}</p>
            </div>
            <div className="mb-6">
                <p className="font-bold mb-2 text-myColors-typeB">{"B. "+keywords[1]['keyword']}</p>
                <p className="mx-2">{keywords[1]['reason']}</p>
            </div>
            <div className="mb-6">
                <p className="font-bold mb-2 text-myColors-typeC">{"C. "+keywords[2]['keyword']}</p>
                <p className="mx-2">{keywords[2]['reason']}</p>
            </div>
            <div className="mb-6">
                <p className="font-bold mb-2 text-myColors-typeD">{"D. "+keywords[3]['keyword']}</p>
                <p className="mx-2">{keywords[3]['reason']}</p>
            </div>
            <div className="mb-6">
                <p className="font-bold mb-2 text-myColors-typeE">{"E. "+keywords[4]['keyword']}</p>
                <p className="mx-2">{keywords[4]['reason']}</p>
            </div>
          </div>
        </div>

        {show_similarStory()}
        
      </div>
    </div>
  );
};

export default ResultPage;
