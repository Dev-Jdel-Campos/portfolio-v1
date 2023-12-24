'use client'

import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import HomePage from "@/components/home/home"
import Project from "@/components/project/project"
import AboutSkill from "@/components/skill/skill"

export default function Home() {
  return (
    <main className="relative">
      <Header  />
      <HomePage />
      <AboutSkill />
      <Project />
      <Footer />     
    </main>
  )
}
