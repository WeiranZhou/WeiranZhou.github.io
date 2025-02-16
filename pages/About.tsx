import Page from "@/components/utility/Page";
import Skills from "@/components/home/Skills";
import React from "react";
import { skills } from "@/data/content/home";

export default function project1() {
  return (
    <Page currentPage="About" meta={{ desc: "I'm interested in accessibility, user experience and HCI." }}>


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

            <p className="text-fun-pink text-xl  pb-2">
              #Inclusive design
            </p>
            <p className="text-fun-pink text-xl  pb-2">
              #Accessibility
            </p>
            <p className="text-fun-pink text-xl  pb-2">
              #User Research
            </p>
          </div>

          <div className="flex flex-col w-2/3 space-y-3   mr-8 ml-7">
            <h1 className="font-bold text-5xl text-gray-800 py-5">
              Hi, there
            </h1>

            <p className="text-gray-500 text-xl ">
              I’m a researcher passionate about disability inclusion, assistive technology, and human-computer interaction, with a strong focus on using user-centred approaches to tackle pressing societal challenges.
              <br />I completed my Master's in<a href="https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/disability-design-and-innovation-msc" className="hover:underline text-fun-pink"> Disability Design & Innovation</a> at UCL.
              I studied <a href="https://dams.njust.edu.cn/7a/57/c16768a293463/page.htm" className="hover:underline text-fun-pink">Industrial Design</a> during my undergraduate, when I found my passion for user experience design. I design for the goal of enabling equal access of digital products for everyone.
            </p>

            <div className="flex flex-row space-x-6 py-4">
              <a href="https://linkedin.com/in/weiran-zhou-685110238"><img
                className="w-7 object-center "
                src="/static/icons/linkedin-f.svg"
              /></a>
              <a href="mailto:zhouweiran.zwr@gmail.com"><img
                className="w-8 relative "
                src="/static/icons/mail-f.svg"
              /></a>
            </div>
          </div>
        </div>


        <div className=" -mx-60 py-4 mt-7">

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
        <div className="-w-full h-0.5 bg-fun-pink mb-5"></div>
        <p className="font-medium text-3xl text-center -mx-60 py-2">
          Things interest me apart from academic
        </p>
        <div className="grid grid-cols-1 text-center space-x-50 space-y-5 justify-between py-5 mx-20">
          <div className="flex flex-col mx-auto">

            <p className="font-bold text-xl text-gray-800 pt-6 pb-3">I enjoy bouldering.</p>
            <div className="w-auto h-0.5 bg-gray-300 mb-3"></div>
            <p>You need to learn how to fall before you learn how to climb. This is the first thing I learnt from bouldering.
            </p>
            <img
              className="w-full mx-auto relative my-3"
              src="static/projects/bouldering.jpg"
            />
          </div>

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
        </div>


        {/* <h2 className="font-bold text-3xl px-10 py-5">
        //   My Education
        // </h2>
        // <p className="text-gray-500 text-xl px-20 py-5">
        //   line1<br />
        //   line 2
        // </p> */}
      </div>
    </Page>
  );
}

