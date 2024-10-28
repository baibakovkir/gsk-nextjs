import {
  BookOpenIcon,
  BookmarkSlashIcon,
  PaperClipIcon,
  ClipboardDocumentListIcon,
  LockClosedIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/wheat2_nobg.png";
import benefitTwoImg from "../../public/img/tomato_nobg.png";


const benefitOne = {
  title: "Работа учреждения",
  desc: "Учреждение собирает и анализирует результаты испытаний, принимает решения о включении селекционных достижений в Государственные реестры и ежегодно издает:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Государственный реестр селекционных достижений, допущенных к использованию",
      desc: "(сорта растений, породы животных)",
      icon: <BookOpenIcon />,
    },
    {
      title: "Государственный реестр охраняемых селекционных достижений",
      desc: "(сорта растений, породы животных)",
      icon: <LockClosedIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Дополнительные издания",
  desc: "Также Госсорткомиссия издает:",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Характеристики",
      desc: "Характеристики сортов растений, впервые включенных в Государственный реестр селекционных достижений, допущенных к использованию",
      icon: <PaperClipIcon />,
    },
    {
      title: "Бюллетени",
      desc: "Периодические издания, содержащие информацию о вновь поступающиx заявках на селекционные достижения",
      icon: <ClipboardDocumentListIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
