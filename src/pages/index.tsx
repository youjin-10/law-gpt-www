import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import summarizeCase from "@/utils/summarizeCase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>로지피티 Law-GPT</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <section className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="text-3xl font-bold mb-10">사이트 준비 중입니다.</h1>
        <h2 className="text-xl font-bold mb-10">
          당신을 위한 빠른 무료법률상담 서비스
        </h2>
        <div>조금만 나중에 만나요!</div>
        {/* next Image */}
        <Image
          src="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/MYbhN8KaaEc"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </section>
    </>
  );
}

function Example() {
  const [inquiry, setInquiry] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [validKeywords, setValidKeywords] = useState<string[]>([]);
  const [result, setResult] = useState<any>({});

  const handleSendInquity = async () => {
    // 1. 사용자 질문 확인
    // 2. 키워드 추출 위해 open ai api 호출 (모델은 간단한 걸로?)
    const response = await fetch("/api/keywords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inquiry,
      }),
    });

    console.log("response: ", response);
    const data = await response.json();
    console.log("data", data);
    console.log("data.result", data.result);
    const keywordArr = data.result.replace(/\n\n/g, "").split(", ");
    console.log("keywordArr", keywordArr);

    // (취소) 3. 키워드로 법령 api 호출 https://www.law.go.kr/DRF/lawSearch.do?OC=dudgus5432&target=law&type=HTML&query={키워드}
    // 4. 키워드로 판례 api 호출 판례: http://www.law.go.kr/DRF/lawSearch.do?OC=dudgus5432&target=prec&type=HTML&query={키워드} -> 이거임
    // 5. 3번 4번의 응답값 확인
    const r = await summarizeCase(keywordArr);
    console.log("과연!!!", r);

    setResult(r);

    // extract keys from r
    // const keywords = Object.keys(r);
    // setKeywords(keywords);

    // const validKeywords = keywords.filter((keyword) => r[keyword].length > 0);
    // setValidKeywords(validKeywords);
  };

  return (
    <section>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          의견서 페이지 - 사용자 Inquiry 입력칸
        </label>
        <div className="relative rounded-md shadow-sm my-5">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="사용자 inquiry"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          className="p-1 border border-gray-500"
          onClick={() => {
            console.log(inquiry);
            // setInquiry("");
            handleSendInquity();
          }}
        >
          의견서 작성
        </button>
      </div>

      <div>
        <div>
          추출한 키워드:
          {Object.keys(result).map((keyword) => {
            return <span className="p-2 ">{keyword}</span>;
          })}
        </div>
        <div>
          유효한 키워드:
          {Object.keys(result)
            .filter((keyword) => result[keyword].length > 0)
            .map((keyword) => {
              return (
                <span className="p-2" key={keyword}>
                  {keyword}
                </span>
              );
            })}
        </div>

        <div>
          <div>판결요지:</div>
          <div className="p-5">
            {Object.keys(result)
              .filter((keyword) => result[keyword].length > 0)
              .map((keyword) => {
                return (
                  <div className="mb-8" key={keyword}>
                    {result[keyword].map((item: any, i: number) => {
                      return (
                        <div className="mb-2" key={i}>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
