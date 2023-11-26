import React, { useState } from "react";
import ResultBarGraph from "./resultBarGraph";
import ResultLineGraph from "./resultLineGraph";

const data1 = {
  storyTreatmntAnalysis: {
    //stageResult: [
    stageResult: [
      {
        stage: "발단",
        summary: "소년과 소녀가 개울가에서 처음 만남",
        emotionResult: [
          { emotion: "기쁨", score: 2 },
          { emotion: "슬픔", score: 2 },
          { emotion: "분노", score: 2 },
          { emotion: "불안", score: 3 },
          { emotion: "혐오", score: 1 },
        ],
      },
      {
        stage: "전개",
        summary: "소년과 소녀가 함께 산으로 놀러 감",
        emotionResult: [
          { emotion: "기쁨", score: 4 },
          { emotion: "슬픔", score: 2 },
          { emotion: "분노", score: 2 },
          { emotion: "불안", score: 3 },
          { emotion: "혐오", score: 1 },
        ],
      },
      {
        stage: "위기",
        summary: "소년과 소녀가 비를 맞고, 소녀가 아파함",
        emotionResult: [
          { emotion: "기쁨", score: 2 },
          { emotion: "슬픔", score: 4 },
          { emotion: "분노", score: 2 },
          { emotion: "불안", score: 4 },
          { emotion: "혐오", score: 1 },
        ],
      },
      {
        stage: "절정",
        summary: "소녀의 이사 소식과 소년의 충격",
        emotionResult: [
          { emotion: "기쁨", score: 1 },
          { emotion: "슬픔", score: 5 },
          { emotion: "분노", score: 2 },
          { emotion: "불 안", score: 5 },
          { emotion: "혐오", score: 1 },
        ],
      },
      {
        stage: "결말",
        summary: "소년이 소녀가 죽은 사실을 알게 됨",
        emotionResult: [
          { emotion: "기쁨", score: 1 },
          { emotion: "슬픔", score: 5 },
          { emotion: "분노", score: 4 },
          { emotion: "불안", score: 5 },
          { emotion: "혐오", score: 1 },
        ],
      },
    ],
    overallResult: [
      {
        emotion: "기쁨",
        score: 2,
        reason:
          "발단에서 소년과 소녀의 만남에 기쁨을 느꼈으나, 그 이후로는 슬픈 이야기가 이어지기 때문에 기쁨이 크게 느껴지지 않는다.",
      },
      {
        emotion: "슬픔",
        score: 3,
        reason:
          "소년과 소녀가 함께한 추억은 아름다웠으나, 소녀의 죽음과 이별의 슬픔이 전반적인 감정의 대부분을 차지한다.",
      },
      { emotion: "분노", score: 2, reason: "소년과 소녀의 이야기에서는 별다른 분노가 나타나지 않는다." },
      {
        emotion: "불안",
        score: 4,
        reason: "소년과 소녀가 함께한 순간에는 불안함이 느껴졌으며, 소녀의 이별과 죽음 소식에서는 불안이 커진다.",
      },
      {
        emotion: "혐오",
        score: 1,
        reason: "혐오와 같은 감정은 드라마에서는 거의 나타나지 않는 감정으로, 이번 이야기에서도 나타나지 않는다.",
      },
    ],
    //   {
    //     stage: "발단",
    //     summary: "단계 대략적인 맥락",
    //     emotionResult: [
    //       {
    //         emotion: "기쁨",
    //         score: 3,
    //       },
    //       {
    //         emotion: "슬픔",
    //         score: 1,
    //       },
    //       {
    //         emotion: "분노",
    //         score: 1,
    //       },
    //       {
    //         emotion: "불안",
    //         score: 2,
    //       },
    //       {
    //         emotion: "혐오",
    //         score: 2,
    //       },
    //     ],
    //   },
    //   {
    //     stage: "전개",
    //     summary: "단계 대략적인 맥락",
    //     emotionResult: [
    //       {
    //         emotion: "기쁨",
    //         score: 4,
    //       },
    //       {
    //         emotion: "슬픔",
    //         score: 3,
    //       },
    //       {
    //         emotion: "분노",
    //         score: 2,
    //       },
    //       {
    //         emotion: "불안",
    //         score: 3,
    //       },
    //       {
    //         emotion: "혐오",
    //         score: 1,
    //       },
    //     ],
    //   },
    //   {
    //     stage: "위기",
    //     summary: "단계 대략적인 맥락",
    //     emotionResult: [
    //       {
    //         emotion: "기쁨",
    //         score: 1,
    //       },
    //       {
    //         emotion: "슬픔",
    //         score: 2,
    //       },
    //       {
    //         emotion: "분노",
    //         score: 3,
    //       },
    //       {
    //         emotion: "불안",
    //         score: 4,
    //       },
    //       {
    //         emotion: "혐오",
    //         score: 3,
    //       },
    //     ],
    //   },
    //   {
    //     stage: "절정",
    //     summary: "단계 대략적인 맥락",
    //     emotionResult: [
    //       {
    //         emotion: "기쁨",
    //         score: 3,
    //       },
    //       {
    //         emotion: "슬픔",
    //         score: 2,
    //       },
    //       {
    //         emotion: "분노",
    //         score: 2,
    //       },
    //       {
    //         emotion: "불안",
    //         score: 4,
    //       },
    //       {
    //         emotion: "혐오",
    //         score: 1,
    //       },
    //     ],
    //   },
    //   {
    //     stage: "결말",
    //     summary: "단계 대략적인 맥락",
    //     emotionResult: [
    //       {
    //         emotion: "기쁨",
    //         score: 5,
    //       },
    //       {
    //         emotion: "슬픔",
    //         score: 2,
    //       },
    //       {
    //         emotion: "분노",
    //         score: 2,
    //       },
    //       {
    //         emotion: "불안",
    //         score: 1,
    //       },
    //       {
    //         emotion: "혐오",
    //         score: 3,
    //       },
    //     ],
    //   },
    // ],
    // overallResult: [
    //   {
    //     emotion: "기쁨",
    //     score: 3,
    //     reason: "뱃사공 송씨가 대어를 낚았음",
    //   },
    //   {
    //     emotion: "슬픔",
    //     score: 1,
    //     reason: "전반적으로 슬퍼한 장면이 없었음",
    //   },
    //   {
    //     emotion: "분노",
    //     score: 4,
    //     reason: "번개가 쳐서 실수로 대어를 놓쳤음",
    //   },
    //   {
    //     emotion: "불안",
    //     score: 3,
    //     reason: "돈을 받지 못할까 두려움",
    //   },
    //   {
    //     emotion: "혐오",
    //     score: 2,
    //     reason: "대어를 놓친 부분에서 자기자신에 대한 불신, 그러나 분노로서의 감정이 더 큼",
    //   },
    // ],
  },
};

const buttonText = { pre: "<", next: ">" };
const emotion = ["happiness", "sadness", "anger", "anxiety", "disgust"];
let stageEmotionResult = data1["storyTreatmntAnalysis"]["stageResult"];
let overallEmotionResult = data1["storyTreatmntAnalysis"]["overallResult"];

function overallBar() {
  let result = [];
  let graphData = [];

  for (let j = 0; j < 5; j++) {
    graphData.push({ name: overallEmotionResult[j]["emotion"], uv: overallEmotionResult[j]["score"] });
  }

  result.push(
    <div className="my-4 w-full flex justify-center">
      <ResultBarGraph data={graphData} />
    </div>
  );

  return result;
}

function stageBar(stageNum) {
  let result = [];
  let graphData = [];

  for (let j = 0; j < 5; j++) {
    graphData.push({
      name: stageEmotionResult[stageNum]["emotionResult"][j]["emotion"],
      uv: stageEmotionResult[stageNum]["emotionResult"][j]["score"],
    });
  }

  result.push(
    <div className="text-center">
      <p className="mt-2 font-bold">{stageEmotionResult[stageNum]["stage"]}</p>
      <p className="my-4">{stageEmotionResult[stageNum]["summary"]}</p>
      <div className="my-4 w-full flex justify-center">
        <ResultBarGraph data={graphData} />
      </div>
    </div>
  );

  return result;
}

function stageLine(stageNums) {
  let result = [];
  let graphData = [];

  for (let i = 0; i < 5; i++) {
    graphData.push({
      name: stageEmotionResult[i]["stage"],
      happiness: stageEmotionResult[i]["emotionResult"][0]["score"],
      anger: stageEmotionResult[i]["emotionResult"][1]["score"],
      anxiety: stageEmotionResult[i]["emotionResult"][2]["score"],
      disgust: stageEmotionResult[i]["emotionResult"][3]["score"],
      sadness: stageEmotionResult[i]["emotionResult"][4]["score"],
    });
  }

  result.push(
    <div className="w-full flex justify-center">
      {/* <ResultLineGraph data={graphData} stageNums={[]}/> */}
      <ResultLineGraph data={graphData} stageNums={stageNums} />
    </div>
  );

  return result;
}

const ResultPage = () => {
  const [stage, setStage] = useState(1);
  const [lineCheck, setLineCheck] = useState([0, 0, 0, 0, 0]);

  const clickPreButton = () => {
    setStage(stage <= 1 ? 5 : stage - 1);
  };
  const clickNextButton = () => {
    setStage(stage >= 5 ? 1 : stage + 1);
  };
  const check = (e) => {
    let temp = [lineCheck[0], lineCheck[1], lineCheck[2], lineCheck[3], lineCheck[4]];
    temp[e.target.value] = lineCheck[e.target.value] ? 0 : 1;
    setLineCheck(temp);
  };

  const selectComponent = [0, stageBar(0), stageBar(1), stageBar(2), stageBar(3), stageBar(4)];

  return (
    <div className="m-3">
      <div className="card">
        <div className="flex">
          <h1 className="ms-3 mt-2">스토리 전개 분석 결과</h1>
        </div>

        <div className="card-bundle">
          <div className="card-title">
            <h2>단계 별 스토리 감정 분석</h2>
          </div>
          <div className="w-full flex">
            <div className="w-40 relative">
              <button
                onClick={clickPreButton}
                className="button-basic text-myColors-primary bg-white
                                    border-2 border-myColors-primary absolute top-1/2 left-1/2"
              >
                {buttonText.pre}
              </button>
            </div>
            <div className="flex-1 card-body mt-4 text-center">{stage && <div>{selectComponent[stage]}</div>}</div>
            <div className="w-40 relative">
              <button
                onClick={clickNextButton}
                className="button-basic text-myColors-primary bg-white
                                    border-2 border-myColors-primary absolute top-1/2 right-1/2"
              >
                {buttonText.next}
              </button>
            </div>
          </div>
        </div>

        <div className="card-bundle">
          <div className="card-title">
            <h2>단계 별 감정 비교</h2>
          </div>
          <div className="card-body mt-4 w-full flex place-content-center">
            <div className="w-70 text-center">
              <div className="flex">
                <input className="me-1" type="checkbox" value="0" onChange={check} />
                {lineCheck[0] ? (
                  <p className="font-bold text-myColors-typeA">기쁨</p>
                ) : (
                  <p className="text-myColors-gray">기쁨</p>
                )}
              </div>
              <div className="flex">
                <input className="me-1" type="checkbox" value="1" onChange={check} />
                {lineCheck[1] ? (
                  <p className="font-bold text-myColors-typeB">슬픔</p>
                ) : (
                  <p className="text-myColors-gray">슬픔</p>
                )}
              </div>
              <div className="flex">
                <input className="me-1" type="checkbox" value="2" onChange={check} />
                {lineCheck[2] ? (
                  <p className="font-bold text-myColors-typeC">분노</p>
                ) : (
                  <p className="text-myColors-gray">분노</p>
                )}
              </div>
              <div className="flex">
                <input className="me-1" type="checkbox" value="3" onChange={check} />
                {lineCheck[3] ? (
                  <p className="font-bold text-myColors-typeD">불안</p>
                ) : (
                  <p className="text-myColors-gray">불안</p>
                )}
              </div>
              <div className="flex">
                <input className="me-1" type="checkbox" value="4" onChange={check} />
                {lineCheck[4] ? (
                  <p className="font-bold text-myColors-typeE">혐오</p>
                ) : (
                  <p className="text-myColors-gray">혐오</p>
                )}
              </div>
            </div>
            <div className="">{stageLine(lineCheck)}</div>
          </div>
        </div>

        <div className="card-bundle">
          <div className="card-title">
            <h2>전반적인 스토리 분석</h2>
          </div>
          <div className="card-body mt-4 w-full">
            <div className="mt-2 flex justify-center">{overallBar()}</div>
            <div className="w-full flex justify-center">
              <table>
                <thead>
                  <tr>
                    <th className="w-20">감정</th>
                    <th className="w-20">스코어</th>
                    <th className="w-96">근거</th>
                  </tr>
                </thead>
                <tbody>
                  {overallEmotionResult.map((item) => {
                    return (
                      <tr>
                        <td className="text-center">{item["emotion"]}</td>
                        <td className="text-center">{item["score"]}</td>
                        <td>{item["reason"]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
