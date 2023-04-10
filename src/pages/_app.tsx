import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { useEffect } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KAKAO_JS_SDK_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_SDK_KEY;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(KAKAO_JS_SDK_KEY);
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
