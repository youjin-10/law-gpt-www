import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-40 sm:h-48 w-full p-4 md:p-6 border-t mt-5 px-3 sm:mb-0 mb-3 text-xs md:text-sm">
      <p>© 로지피티 2023</p>
      <div>
        <p>상호: 로지피티</p>
        <p>대표: 추다은</p>
        <p>주소: 서울특별시 송파구 양재대로 1218</p>
        <p>사업자등록번호: 336-03-02820</p>
        <p>이메일 문의: lawgpt.team@gmail.com</p>
      </div>
    </footer>
  );
}
