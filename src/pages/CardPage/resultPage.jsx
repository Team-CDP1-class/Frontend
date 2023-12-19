import React from "react";
import ResultGraph from "./resultGraph";

const valueName = ["A", "B", "C", "D", "E"];

function show_similarStory(keywords, similarStory) {
  let result = [];

  for (let i = 0; i < similarStory.length; i++) {
    let graphData = [];

    for (let j = 0; j < 5; j++) {
      graphData.push({ name: valueName[j], uv: similarStory[i]["similarity"][j]["percent"] });
    }

    result.push(
      <div className="card-bundle">
        <div className="card-title flex">
          <h2>{"유사한 문학 " + (i + 1) + " : "}</h2>
          <h2 className="ms-2 text-myColors-primary">{similarStory[i]["title"]}</h2>
        </div>
        <div className="card-body">
          <p className="mt-2">{similarStory[i]["story"]}</p>

          <div className="mt-8">
            <p className="mb-8 font-bold">유사도와 판단 근거</p>
            <div className="mb-4 w-full flex justify-center">
              <ResultGraph data={graphData} />
            </div>

            <div>
              <div className="mb-4">
                <p className="mb-2 text-myColors-typeA">
                  {"A. " + keywords[0]["keyword"] + " (" + similarStory[i]["similarity"][0]["percent"] + "%)"}
                </p>
                <p className="mx-2">{similarStory[i]["similarity"][0]["reason"]}</p>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-myColors-typeB">
                  {"B. " + keywords[1]["keyword"] + " (" + similarStory[i]["similarity"][1]["percent"] + "%)"}
                </p>
                <p className="mx-2">{similarStory[i]["similarity"][1]["reason"]}</p>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-myColors-typeC">
                  {"C. " + keywords[2]["keyword"] + " (" + similarStory[i]["similarity"][2]["percent"] + "%)"}
                </p>
                <p className="mx-2">{similarStory[i]["similarity"][2]["reason"]}</p>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-myColors-typeD">
                  {"D. " + keywords[3]["keyword"] + " (" + similarStory[i]["similarity"][3]["percent"] + "%)"}
                </p>
                <p className="mx-2">{similarStory[i]["similarity"][3]["reason"]}</p>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-myColors-typeE">
                  {"E. " + keywords[4]["keyword"] + " (" + similarStory[i]["similarity"][4]["percent"] + "%)"}
                </p>
                <p className="mx-2">{similarStory[i]["similarity"][4]["reason"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return result;
}

const ResultPage = (props) => {
  console.log(props.cardReuslt);
  const data1 = props.cardReuslt;
  const keywords = data1.keywords;
  const similarStory = data1.similarStory;   

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
              <p className="font-bold mb-2 text-myColors-typeA">{"A. " + keywords[0]["keyword"]}</p>
              <p className="mx-2">{keywords[0]["reason"]}</p>
            </div>
            <div className="mb-6">
              <p className="font-bold mb-2 text-myColors-typeB">{"B. " + keywords[1]["keyword"]}</p>
              <p className="mx-2">{keywords[1]["reason"]}</p>
            </div>
            <div className="mb-6">
              <p className="font-bold mb-2 text-myColors-typeC">{"C. " + keywords[2]["keyword"]}</p>
              <p className="mx-2">{keywords[2]["reason"]}</p>
            </div>
            <div className="mb-6">
              <p className="font-bold mb-2 text-myColors-typeD">{"D. " + keywords[3]["keyword"]}</p>
              <p className="mx-2">{keywords[3]["reason"]}</p>
            </div>
            <div className="mb-6">
              <p className="font-bold mb-2 text-myColors-typeE">{"E. " + keywords[4]["keyword"]}</p>
              <p className="mx-2">{keywords[4]["reason"]}</p>
            </div>
          </div>
        </div>

        {show_similarStory(keywords, similarStory)}
      </div>
    </div>
  );
};

export default ResultPage;
