import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useRef, useEffect } from "react";
import summarizeCase from "@/utils/summarizeCase";
import Lawyers from "@/components/Lawyers";
import QnaAccordion from "@/components/QnaAccordion";
import { KakaoChannel } from "@/components/KakaoChannel";
import { motion } from "framer-motion";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>로지피티 Law-GPT | 당신을 위한 빠른 무료법률상담</title>
        <link rel="icon" href="/favicon_lawgpt.ico" />
      </Head>

      <section className="flex flex-1 max-w-[800px] mx-auto flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <MainTitle />
        <MainChatImages />

        <MainIntro />

        <KakaoChannel />

        <Lawyers />
        <QnaAccordion />

        <div className="h-56"></div>
      </section>
    </>
  );
}

const MainChatImages = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="h-[200px] sm:min-h-[450px] w-full relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/test-ask.png"
          alt="user asking question"
          width={320}
          height={320}
          className="absolute top-7 sm:top-10 right-3 sm:right-20 md:right-14 w-48 sm:w-52 md:w-80 transition-all duration-700 ease-out transform hover:scale-110"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Image
          src="/test-answer.png"
          alt="law-gpt answering question"
          width={320}
          height={320}
          className="absolute top-28 sm:top-32 md:top-40 left-3 sm:left-20 md:left-14 w-44 sm:w-52 md:w-80 transition-all duration-700 ease-out transform hover:scale-110"
        />
      </motion.div>
    </div>
  );
};

const MainTitle = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.h2
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      className="text-3xl sm:text-4xl md:text-6xl font-bold my-12"
    >
      <span>당신을 위한 </span>
      <br />
      <span>빠른 무료법률상담 서비스</span>
    </motion.h2>
  );
};

const MainIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, once: true }}
        className="text-xl md:text-3xl mt-28 mb-36"
      >
        <div>
          법률서비스 이용자들에게 <strong>생성형AI</strong>를 이용한
        </div>
        <div>무료법률상담 솔루션을 제공하고</div>
        <div>이를 바탕으로 전문 변호사의 정보를 제공합니다.</div>
      </motion.div>
    </div>
  );
};
