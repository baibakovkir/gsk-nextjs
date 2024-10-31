'use client';
import { Container } from "@/components/Container";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'
interface RegistryItem {
  id: number;
  name: string;
  // ... other properties
}

export default function Registry() {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({
      threshold: 0
  });

  useEffect(() => {
      if (inView) {
          fetchData();
      }
  }, [inView]);

  async function fetchData() {
      const response = await fetch(`/api/registry?page=${page}`);
      const newData = await response.json();
      setData([...data, ...newData]);
      setPage(page + 1);
  }

  return (
      <Container>
          <h1>Реестр</h1>
          <div>
              {data.map((item, index) => (
                  <div key={index}>{item}</div>
              ))}
          </div>
          <div ref={ref} />
      </Container>
  );
}