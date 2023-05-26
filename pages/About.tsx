import Page from "@/components/utility/Page";
import Skills from "@/components/home/Skills";
import React from "react";
import { skills } from "@/data/content/home";

export default function project1() {
  return (
    <Page currentPage="About" meta={{ desc: "I'm a passionate web developer and designer coding beautiful websites and apps." }}>


      <div className="flex flex-col my-2 mx-20 text-left">
        <div className="flex">
          <div className="flex flex-col w-1/3 text-center ml-10 mr-2">
            <img
              className="w-36 mx-auto relative rounded-full   will-change-projectCard mb-3 mt-10"
              src="static/projects/my-picture.jpg"
            />
            <h1 className="font-bold text-xl text-gray-800 py-3">
              Weiran Zhou
            </h1>
            {/* <div className="w-full h-0.5 bg-fun-pink"></div> */}

            <p className="text-gray-500 text-xl pb-4">
              Based in London
            </p>

            <p className="text-fun-pink text-xl  pb-2">
              #UX design
            </p>
            <p className="text-fun-pink text-xl  pb-2">
              #Accessibility
            </p>
          </div>

          <div className="flex flex-col w-2/3 space-y-3 mt-24  mr-8 ml-7">
            <h1 className="font-bold text-5xl text-gray-800 py-5">
              Hi, there
            </h1>

            <p className="text-gray-500 text-xl ">
              I’m currently studying <a href="https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/disability-design-and-innovation-msc" className="hover:underline text-fun-pink">MSc Disability Design & Innovation</a> at UCL.<br />
              I studied <a href="https://dams.njust.edu.cn/7a/57/c16768a293463/page.htm" className="hover:underline text-fun-pink">Industrial Design</a> during my undergraduate, when I found my passion for user experience design. I design for the goal of enabling equal access of digital products for everyone.
            </p>

            <div className="flex flex-row space-x-6">
              <a href="https://linkedin.com/in/weiran-zhou-685110238"><img
                className="w-7 object-center "
                src="/static/icons/linkedin-f.svg"
              /></a>
              <a href="mailto:zhouweiran.zwr@gmail.com"><img
                className="w-8 relative "
                src="/static/icons/mail-f.svg"
              /></a>
              <a href="static/projects/CV-PDF.pdf"><img
                className="w-8 relative "
                src="/static/icons/cv.svg"
              /></a>
            </div>
          </div>
        </div>


        <div className=" -mx-60 py-10 my-7">

          <div className="flex space-x-50 justify-between  align-middlepy-5 px-40">
            <div className="lex flex-col w-1/3  ml-20 py-5 text-center place-content-center">
              <p className="text-gray-800 text-xl font-bold ">Software Skills</p>

            </div>
            <div className="flex flex-col w-2/3 ">
              <div className="relative max-w-lg w-full mr-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-1 sm:grid-cols-6 items-center place-content-center">
                {skills.map((item, index) => {
                  return (
                    <div
                      title={item.title}
                      key={index}
                      className="w-10 mx-auto flex items-center flex-col justify-center"
                    >
                      <img src={item.icon} style={item.style} />
                      <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
{/* 
        <p className="text-white font-bold text-xl text-center bg-t-pink -mx-60 py-5">
          Apart from design, you can find my interest here ⬇️
        </p>
        <div className="grid grid-cols-1 text-center space-x-50 space-y-5 justify-between py-5 mx-20">
          <div className="flex flex-col mx-auto">

            <p className="font-bold text-xl text-gray-800 pt-6 pb-3">I love music.</p>
            <div className="w-auto h-0.5 bg-gray-300 mb-3"></div>
            <p>I play the piano for fun since a very young age.
            </p>
            <img
              className="w-full mx-auto relative my-3"
              src="/static/projects/music.jpg"
            />
          </div>

          <div className="flex flex-col mx-auto">

            <p className="font-bold text-xl text-gray-800 pt-6 pb-3 ">I'm a feminist.</p>
            <div className="w-auto h-0.5 bg-gray-300 mb-3"></div>
            <p>I write blogs related to feminism and sexuality education.
            </p>
            <img
              className="w-full mx-auto relative my-3"
              src="/static/projects/femi.jpg"
            />
          </div>

          <div className="flex flex-col mx-auto">

            <p className="font-bold text-xl text-gray-800 pt-6 pb-3 ">I advocate for sexuality education in China.</p>
            <div className="w-auto h-0.5 bg-gray-300 mb-3"></div>
            <p>Apart from blogs, I love designing educational materials for children to learn about sexuality edu.
            </p>
            <img
              className="w-full mx-auto relative my-3"
              src="/static/projects/edu.jpg"
            />
          </div>
        </div> */}


        {/* <h2 className="font-bold text-3xl px-10 py-5">
          My Education
        </h2>
        <p className="text-gray-500 text-xl px-20 py-5">
          line1<br />
          line 2
        </p> */}
      </div>
    </Page>
  );
}

