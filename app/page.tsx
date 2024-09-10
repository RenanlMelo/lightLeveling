"use client";

import { About } from "@/components/about/About";
import { Background } from "@/components/background/Background";
import { Cases } from "@/components/cases/Cases";
import { Footer } from "@/components/footer/Footer";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header/Header";
import { Introduction } from "@/components/introduction/Introduction";
import { Services } from "@/components/services/Services";
import { useState } from "react";

export default function Home() {
  const [sectionSize, setSectionSize] = useState<number | null>(null);

  return (
    <>
      <Header sectionSize={sectionSize} />
      <Introduction sectionSize={sectionSize} />
      <Services setSectionSize={setSectionSize} />
      <Form />
      <Cases />
      <About />
      <Footer />
    </>
  );
}
