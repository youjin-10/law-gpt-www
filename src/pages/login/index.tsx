import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";

const Index = () => {
  const { data: session } = useSession();

  let content = session ? (
    <>
      <p>{session.user?.name}님 반갑습니다</p>
      <button onClick={() => signOut()}>로그아웃</button>
    </>
  ) : (
    <button
      className="px-20 py-2 border border-gray-200 rounded-full"
      onClick={() => signIn("kakao")}
    >
      카카오 로그인
    </button>
  );

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="absolute flex flex-col gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {content}
      </div>
    </section>
  );
};

export default Index;
