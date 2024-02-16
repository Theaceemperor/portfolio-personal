'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { GrMoney } from 'react-icons/gr';
import { IoRose } from 'react-icons/io5';
import { FaCode, FaHeart, FaInstagram, FaShareNodes, FaTiktok, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { ShareButton } from "./components/reuseable";
import Link from "next/link";
import MySwiper from "./components/swiper";

export default function Home() {
  const router = useRouter();

  const url = 'https://spadeshub.com';

  return (
    <main>
      <header className="h-screen flex flex-col items-center justify-center px-2">
        <h1 className="text-center text-3xl sm:text-7xl font-bold flex items-center">Hi I am John Doe</h1>
        <p className="text-gray-600 dark:text-white/60">Full-stack developer</p>
        <div className="flex justify-center items-center mt-4 space-x-2 sm:space-x-4">
          <button onClick={() => router.push('#about-me')} className="px-4 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-600/60 text-lg font-semibold">About me</button>
          <button onClick={() => router.push('#contact-me')} className="px-4 py-1 rounded-full text-blue-600 dark:text-white hover:shadow hover:shadow-blue-600/50 text-lg font-semibold">Contact me</button>
        </div>
      </header>

      <div id="about-me" className="bg-white px-2 text-center py-8">
        <h2 className="text-2xl hover:text-blue-600 font-bold cursor-pointer text-black">About Me</h2>
        <p className="text-gray-700">Full-stack Developer!</p>
        <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quod totam reprehenderit sunt quisquam quo voluptates vitae itaque qui suscipit earum tempora, ex tempore!</p>
        <div className="flex justify-center items-center mt-4 space-x-2 sm:space-x-4">
          <button onClick={() => router.push('#contact-me')} className="px-4 py-1 rounded-full text-blue-600 hover:shadow hover:shadow-blue-600/50 font-semibold">Get started now</button>
          <button onClick={() => router.push('#portfolio')} className="px-4 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-600/60 font-semibold">Learn More</button>
        </div>
      </div>

      <div id="portfolio" className="py-16 px-2">
        <h2 className="text-2xl text-center hover:text-blue-600 font-bold cursor-pointer mb-4 flex items-center justify-center">My Portfolio<span><FaCode className="text-blue-600 ml-2" /></span></h2>
        <p className="text-center">Interact with the swipe through my portfolio projects.</p>

        <div className="flex justify-center items-center mt-4">
          <MySwiper />
        </div>
      </div>

      <div id="contact-me" className="py-8 bg-white px-2">
        <h2 className="text-2xl text-center hover:text-blue-600 font-bold cursor-pointer mt-8 text-black">Get in touch</h2>

        <div className="flex items-center justify-center mt-8">
          <Link href={"tel:+2349023236306"} className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-transparent hover:text-blue-600 font-bold text-lg" target="_blank" rel="noopener noreferrer">Contact me</Link>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4 text-xl">
          <FaXTwitter className="text-blue-600 hover:text-rose-600" />
          <FaInstagram className="text-blue-600 hover:text-rose-600" />
          <FaWhatsapp className="text-blue-600 hover:text-rose-600" />
        </div>
      </div>

      <footer className="p-4">
        <p className="text-center animate-pulse dark:text-white/70 text-blue-600">Trust the process and work hard</p>
        <ul className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
          <li onClick={() => router.push('/')} className="cursor-pointer hover:text-blue-600">Home</li>
          <li onClick={() => router.push('#about-me')} className="cursor-pointer hover:text-blue-600">About</li>
          <li onClick={() => router.push('#portfolio')} className="cursor-pointer hover:text-blue-600">My Portfolio</li>
          <li onClick={() => router.push('#contact-me')} className="cursor-pointer hover:text-blue-600">Get in touch</li>
          <ShareButton />
        </ul>

        <p className="text-center mt-4">&copy; portfolioPersonal 2024</p>
      </footer>
    </main>
  );
}