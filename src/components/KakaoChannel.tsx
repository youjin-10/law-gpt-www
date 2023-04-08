declare global {
  interface Window {
    Kakao: any;
  }
}

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const KAKAO_JS_SDK_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_SDK_KEY;

export function KakaoChannel() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  useEffect(() => {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(KAKAO_JS_SDK_KEY);
      // kakao.Channel.createAddChannelButton({
      //   container: "#add-channel-button",
      //   channelPublicId: "_xeuyUxj", // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
      // });
    }

    // const script = document.createElement("script");
    // script.async = true;
    // try {
    //   if (window.Kakao) {
    //     const kakao = window.Kakao;
    //     if (!kakao.isInitialized()) {
    //       kakao.init("c1b46de0d7f0d78bfbedbec4f46e25d4");
    //     }
    //     kakao.Channel.createAddChannelButton({
    //       container: "#add-channel-button",
    //       channelPublicId: "_xeuyUxj", // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
    //     });
    //   }
    //   document.body.appendChild(script);
    //   document.body.removeChild(script);
    // } catch (error) {}
  }, []);

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
        className="h-60 mt-16 mb-36"
      >
        <div className="text-lg md:text-2xl font-medium mb-6">
          카카오톡 채널 추가해서 로지피티 사용해보기
        </div>

        <button
          className="animate-blink mx-auto w-40 sm:w-60 h-10 sm:h-12 rounded-full bg-purple-800 text-white text-xs sm:text-lg font-medium flex items-center justify-center shadow-lg hover:cursor-pointer hover:bg-purple-900 transition duration-500 ease-in-out"
          id="add-channel-button"
          onClick={() => {
            window.Kakao.Channel.addChannel({
              channelPublicId: "_xeuyUxj",
            });
          }}
        >
          로지피티 카카오톡 채널
        </button>
      </motion.div>
    </div>
  );
}
