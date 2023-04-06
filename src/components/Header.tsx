import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <h1>
        <Link href="/" className="flex space-x-3">
          <Image
            alt="header logo"
            src="/ourlogo2.png"
            className="w-16 md:w-32"
            width={64}
            height={64}
          />
        </Link>
      </h1>
      <nav>
        <ul className="flex space-x-3 text-sm md:text-base">
          <li className="text-gray-500 hover:text-gray-900">
            <Link href="/">변호사 리스트</Link>
          </li>
          <li className="text-gray-500 hover:text-gray-900">
            <Link href="/">의견서 작성하기</Link>
          </li>
        </ul>
      </nav>
      {/* <a href="" target="_blank" rel="noreferrer"></a> */}
    </header>
  );
}
