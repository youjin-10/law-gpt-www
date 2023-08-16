import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.replace("/");
  };
  return (
    <section>
      <h2 className="text-2xl font-bold text-center my-20">
        회원 가입을 진행해 주세요.
      </h2>
      <form className="w-full max-w-xs mx-auto my-20">
        <div className="my-10">
          <label
            htmlFor="id"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            아이디 (필수)
          </label>
          <input
            type="text"
            name="id"
            id="id"
            autoComplete="id"
            className="w-full border border-gray-300 rounded-md bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="my-10">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            비밀번호 (필수)
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="password"
            className="w-full border border-gray-300 rounded-md bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        {/* <div className="my-10">
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            핸드폰 번호 (필수)
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="phone"
            className="w-full border border-gray-300 rounded-md bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="my-10">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            이메일 (필수)
          </label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="email"
            className="w-full border border-gray-300 rounded-md bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div> */}

        <div className="my-10">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            이름 (필수)
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className="w-full border border-gray-300 rounded-md bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="my-10">
          <label
            htmlFor="birthYYYYMMDD"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            생년월일 (필수) *1999.12.31 형식으로 기입
          </label>
          <input
            type="text"
            name="birthYYYYMMDD"
            id="birthYYYYMMDD"
            autoComplete="birthYYYYMMDD"
            className="w-full border border-gray-300 rounded-md bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="my-10">
          {/* <label
            htmlFor="gender"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            성별
          </label>
          <input
            type="checkbox"
            name="gender"
            id="gender"
            autoComplete="gender"
            className="w-full border border-gray-300 rounded-md bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          /> */}
          <fieldset>
            <legend className="block text-sm font-medium leading-6 text-gray-900">
              성별 (선택 사항)
            </legend>

            <div>
              <input type="radio" id="male" name="gender" />
              <label
                htmlFor="male"
                className="ml-2 text-sm font-medium leading-6 text-gray-900"
              >
                남성
              </label>
            </div>

            <div>
              <input type="radio" id="female" name="gender" />
              <label
                htmlFor="female"
                className="ml-2 text-sm font-medium leading-6 text-gray-900"
              >
                여성
              </label>
            </div>
          </fieldset>
        </div>
        <button
          onClick={handleRegister}
          className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          회원가입
        </button>
      </form>
    </section>
  );
};

export default Index;
