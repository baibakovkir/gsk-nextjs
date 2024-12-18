import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import ("@/components/Map"), { ssr: false });

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Функции Госсорткомиссии"
        title="Регионы допуска и световые зоны"
      >
        Проведение государственных испытаний селекционных достижений на отличимость, однородность и стабильность, государственных испытаний сортов растений по хозяйственно-полезным признакам и свойствам проводится в 12 регионах допуска и 7 световых зонах.
      </SectionTitle>
      <DynamicMap />

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Видео о нас"
        title="Лабораторные испытания"
      >
        Сортоиспытание на уровне ДНК: Всероссийский центр оценки качества сортов
      </SectionTitle>

      <Video videoId="OYgitEUpEq8" />

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}

      {/* <Testimonials /> */}

      <SectionTitle preTitle="FAQ" title="Часто задаваемые вопросы">
        Решения наиболее частых проблем
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
    </Container>
  );
}
