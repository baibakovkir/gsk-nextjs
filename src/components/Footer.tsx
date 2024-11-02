import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = [
    {name: "Реестр достижений", link: "/registry"},
    {name: "Издания", link: "/publications"},
    {name: "Документы", link: "/documents"},
    {name: "Пресса", link: "/news"},
    {name: "Контакты", link: "/contacts"},
  ];
  const legal = [
    "Политика конфиденциальности",
    "Противодействие коррупции"
  ];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
            </div>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            Государственная Комиссия Российской Федерации по испытанию и охране селекционных достижений (ФГБУ «Госсорткомиссия»)
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-lime-500 focus:text-lime-500 focus:bg-lime-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-lime-500 focus:text-lime-500 focus:bg-lime-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Наши соц. сети</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://vk.ru/gossortkomissiya" target="_blank" rel="noopener">
                <span className="sr-only">Vk</span>
                <Vk />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const Vk = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11.5 24h1c5.44 0 8.15 0 9.83-1.68C24 20.64 24 17.92 24 12.5v-1.02c0-5.4 0-8.12-1.67-9.8C20.65 0 17.93 0 12.5 0h-1C6.06 0 3.35 0 1.67 1.68 0 3.36 0 6.08 0 11.5v1.02c0 5.4 0 8.12 1.68 9.8C3.36 24 6.08 24 11.5 24Z"></path>
    <path d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58a7.62 7.62 0 0 1-3.51 4.98 7.9 7.9 0 0 1 4.11 5.01h-2.84a4.94 4.94 0 0 0-4.14-3.57v3.57h-.31Z" fill="#fff"></path>
  </svg>
);

