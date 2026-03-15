import Image from "next/image";
import Hero from "@/component/hero";
import Navigation from "@/component/navbar";
import About from "@/component/about";
import TeamSection from "@/component/ourTeam";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <TeamSection/>

    </div>
  );
}
