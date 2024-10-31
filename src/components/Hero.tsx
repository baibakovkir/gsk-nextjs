import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/logo.png";
import mcxImg from "../../public/img/mcx.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Госсорткомиссия
            </h1>
            <p className="py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            ФГБУ «Госсорткомиссия» – это государственная сортоиспытательная сеть, состоящая из 45 филиалов, которые включают в себя 276 государственных сортоиспытательных участков.
            В состав Учреждения также входят Всероссийский Центр Оценки Качества Сортов (ВЦОКС) и 4 лаборатории в различных субъектах Российской Федерации.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
      <div className="flex flex-wrap justify-center gap-5 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400 flex flex-col justify-center mb-10">
              <Image width={100} height={100} src={mcxImg.src} alt="mcx" className="mx-auto" />
              <span className="font-bold text-center">МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА</span>
            </div>
          </div>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            <span className="text-lime-600">2000+</span>{" "}
            испытаний селекционного достижения на отличимость, однородность, стабильность
          </div>
          <div className="text-xl text-center text-gray-700 dark:text-white">
            <span className="text-lime-600">22700+</span>{" "}
            сортоопытов проведено в рамках государственных испытаний сортов сельскохозяйственных растений
          </div>
        </div>
      </Container>
    </>
  );
}

