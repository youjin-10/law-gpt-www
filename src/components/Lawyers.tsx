import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Lawyers() {
  let [categories] = useState({
    민사: [
      {
        id: 1,
        title: "민사 일반 담당",
        photo: "/lawyer1.jpeg",
        studies: [
          "고려대학교 법학전문대학원",
          "고려대학교 경제학과",
          "청심국제중학교",
          "Brookswood Secondary School",
        ],
        experiences: [
          "現) 법률사무소 세찬",
          "前) 법무법인 명진",
          "前) 법무법인 수오재",
          "前) 롯데케미칼 주식회사 법무팀",
          "前) 양육비이행관리원 법무팀",
        ],
      },
    ],
    건설: [],
    이혼: [],
  });

  return (
    <div id="lawyers" className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-purple-800/30  p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-purple-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {Object.values(categories).map((lawyers, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-purple-100/30 p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {lawyers.length === 0 ? (
                  <div className="h-44">준비중입니다.</div>
                ) : (
                  <LaywerDetail lawyers={lawyers} />
                )}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

function LaywerDetail({ lawyers }: { lawyers: any }) {
  return (
    <div>
      {lawyers.map((post) => (
        <li key={post.id} className="relative rounded-md p-1 ">
          <h3 className=" font-medium leading-5">{post.title}</h3>

          <Image
            src={post.photo}
            alt="lawyer1"
            width={40}
            height={40}
            className="w-20 m-3 mx-auto"
          />

          <h4>[학력]</h4>
          <ul className="my-1 font-normal  text-gray-500">
            {post.studies.map((study, i) => (
              <li key={i}>{study}</li>
            ))}
          </ul>

          <h4>[경력]</h4>
          <ul className="my-1 font-normal  text-gray-500">
            {post.experiences.map((experience, i) => (
              <li key={i}>{experience}</li>
            ))}
          </ul>
        </li>
      ))}
    </div>
  );
}
