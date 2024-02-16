'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLink } from "react-icons/bi";
import Swiper from "swiper";
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { PortfolioCard } from "./reuseable";

const projects = [
  {
    name: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius lacinia odio, a finibus risus auctor a.',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    liveDemo: 'https://example.com/project1',
    sourceCode: 'https://github.com/your-username/project1',
  },
  {
    name: 'Project 2',
    description: 'Vestibulum vitae justo nec justo fermentum ultrices non quis lacus. Curabitur at elit malesuada, hendrerit justo id, dapibus metus.',
    technologies: ['Vue.js', 'Express', 'SASS'],
    liveDemo: 'https://example.com/project2',
    sourceCode: 'https://github.com/your-username/project2',
  },
  // Add more projects as needed
];

export default function MySwiper() {
  React.useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      autoplay: {
          delay:3000,
          disableOnInteraction: false,
      },
      loop: true,
      effect: 'cube',

  
      pagination: {
          el: "swiper-pagination",
          clickable: true,
      },
  
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  
      scrollbar: {
          el: 'swiper-srollbar',
      }
    });
  })

    return (
        <section className="w-64 sm:w-80">
            {/* <!-- Slider main container --> */}
            <div className="container rounded-md"> 
              <div className="swiper">
                  <div className="swiper-wrapper">
                    {projects.map((project, index) => (
                      <div key={index} className="swiper-slide">
                        <PortfolioCard project={project} />
                      </div>
                    ))}
                  </div>
                  <div className="swiper-pagination"></div>
              </div>
            </div>    

            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
            />

            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        </section>
    )
}