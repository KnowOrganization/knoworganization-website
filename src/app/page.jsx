import Image from 'next/image'
import logo from '../assets/logo/W-Back_B-Letter_box.png'
import HeroSection from '@/components/HeroSection'
import Header from '@/components/Hearder'
import HeroSection2 from '@/components/HeroSection2'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import WhyChooseUs from '@/components/WhyChooseUs'
import Contactus from '@/components/Contactus'
import Knowcontact from './knowcontact/page'
import Knowabout from './knowabout/page'
import Knowservices from './knowservices/page'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between md:px-28 px-10">
        {/* <Header /> */}
      <HeroSection />
      <Services />
      <Knowservices />
			<Clients />
			<WhyChooseUs /> 
      <Knowabout />
			{/* <Contactus /> */}

      <Knowcontact />




    </main>
  )
}
