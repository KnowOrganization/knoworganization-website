import Image from 'next/image'
import logo from './assets/logo/W-Back_B-Letter_box.png'


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-32">
      <Image className=' h-70 w-auto' src={logo} alt="" />
      <h1 className=' text-2xl '>Comming Soon</h1>
    </main>
  )
}
