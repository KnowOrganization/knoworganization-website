import Image from 'next/image'
import logo from '../assets/logo/W-Back_B-Letter_box.png'
import HeroSection from '@/components/HeroSection'
import Header from '@/components/Hearder'
import HeroSection2 from '@/components/HeroSection2'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-28">
        {/* <Header /> */}
      <HeroSection />
    </main>
  )
}
