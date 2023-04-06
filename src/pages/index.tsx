import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import summarizeCase from "@/utils/summarizeCase";

// const inter = Inter({ subsets: ["latin"] });

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
        <div className=" h-96"></div>
        {/* next Image */}
        {/* <Image
          src="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/MYbhN8KaaEc"
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
      </section>
    </>
  );
}
