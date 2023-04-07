import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import summarizeCase from "@/utils/summarizeCase";
import Lawyers from "@/components/Lawyers";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>로지피티 Law-GPT | 당신을 위한 빠른 무료법률상담</title>
      </Head>

      <section className="flex flex-1 max-w-[800px] mx-auto flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-10">
          <span>당신을 위한 </span>
          <br />
          <span>빠른 무료법률상담 서비스</span>
        </h2>
        <div className="h-[200px] sm:min-h-[450px] w-full relative">
          <Image
            src="/test-ask.png"
            alt="user asking question"
            width={320}
            height={320}
            className="absolute top-10 right-10 sm:right-20 md:right-14 w-36 sm:w-52 md:w-80 transition-all duration-700 ease-out transform hover:scale-110"
          />
          <Image
            src="/test-answer.png"
            alt="law-gpt answering question"
            width={320}
            height={320}
            className="absolute top-28 sm:top-32 md:top-40 left-10 sm:left-20 md:left-14 w-36 sm:w-52 md:w-80 transition-all duration-700 ease-out transform hover:scale-110"
          />
        </div>

        <div className="text-xl md:text-3xl mt-28 mb-48">
          <div>
            법률서비스 이용자들에게 <strong>생성형AI</strong>를 이용한
          </div>
          <div>무료법률상담 솔루션을 제공하고</div>
          <div>이를 바탕으로 전문 변호사의 정보를 제공합니다.</div>
        </div>

        <Lawyers />

        <div className="h-56"></div>
      </section>
    </>
  );
}
