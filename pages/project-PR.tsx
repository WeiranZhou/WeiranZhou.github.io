import React from "react";
import Page from "@/components/utility/Page";
import projects from "@/data/content/projects";
// import components from "@/components/utility/main.css";

function onClickLeftButton(current_state, setStateFunc, state_list) {
  setStateFunc(current_state == 0 ? state_list.length - 1 : current_state - 1)
}

function onClickRightButton(current_state, setStateFunc, state_list) {
  setStateFunc(current_state == state_list.length - 1 ? 0 : current_state + 1)
}

export default function project1() {
  const [checklistImgID, setChecklistImgID] = React.useState(0)

  const checklistImgList1 = ["/static/projects/d-ui-r1.png", "/static/projects/d-ui-r2.png", "/static/projects/d-ui-r3.png"]

  const checklistImgList2 = ["/static/projects/d-ui-re2.png", "/static/projects/d-record-2.png", "/static/projects/d-custom card.png", "/static/projects/d-listen.png", "/static/projects/d-repeat.png", "/static/projects/d-assistant.png", "/static/projects/d-keyboard.png"]

  return (
    <Page currentPage="Portfolio" meta={{ desc: "This is my portfolio." }}>

      <img
        className="w-full relative rounded-md   will-change-projectCard mt-5 "
        src="/static/projects/d-cover-in.jpg"
      />
      <div className="flex flex-col mt-10  space-y-4 mx-auto text-left">
        <h1 className="font-bold text-5xl px-20 text-gray-800">
          Go Relate
        </h1>

        <p className="text-gray-500 text-lg px-20 py-5">
          Project Relate is a recently released Android beta app from Google Research for automatic speech recognition of non-standard speech. The app aims to help communication for people with non-standard speech in daily life. Given the awareness of the app is low within the clinical and target user population, with the limited onboarding training of the app, designing training on the use of Project Relate is the goal of this project.<br />
          Go Relate is the online training designed for speech and language therapists (SLTs) to help learning and adoption of Project Relate for their clients in everyday life. The design involved thorough user research with specialists inclusing co-design with SLTs to create the user-centred training for them. The training is currently developed to incorperate into the AT innovation portal at GDI Hub.
        </p>

        <div className="w-full h-0.5 bg-gray-300"></div>

        <div className="flex space-x-50 justify-between py-5 px-20">
          <div className="flex flex-col ">
            <p className="font-bold underline">Scope</p>
            <p>Problem framing<br />
              Concept development<br />
              Design implementation<br />
              <br />
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">My Role</p>
            <p>User research<br />
              UI design<br />
              Usability test<br />
              Implementation<br />
            </p>

          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">Duration</p>
            <p>04/2023 - 10/2023</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">Client</p>
            <a href="https://audemic.io/">Global Disability Innovation Hub</a>
          </div>
        </div>
        <div className="Text-left px-20 py-5">
          <h2 className="font-bold text-3xl py-5">
            Background information
          </h2>

          <div>

            <div className="mb-8 grid grid-cols-3 gap-10 text-lg font-normal text-gray-600">

              <div className="flex flex-col justify-start ">
                <h3 className="pt-3 pb-8 font-bold  text-fun-pink  text-lg text-arial">
                  What is AT?
                </h3>
                <p className="text-lg mr-6 font-normal">
                  It stands for assistive technology, which is an umbrella term for<span className="font-bold"> assistive products</span> and their related <span className="font-bold">services </span> that are essential to the distribution and utilisation of assistive products.
                </p>
              </div>

              <div className="flex flex-col justify-start ">
                <h3 className="pt-3 pb-8 font-bold  text-fun-pink  text-lg text-arial">
                  What is Project Relate?
                </h3>
                <p className="text-lg font-normal">
                  It is a <span className="font-bold">personalised </span>speech recognition APP recently introduced by Google. It enables individuals with non-standard speech to  <span className="font-bold">train </span>speech recognition models specifically on their own speech patterns.
                </p>
              </div>

              <div className="flex flex-col justify-start ">
                <h3 className="pt-3 pb-1 font-bold  text-fun-pink  text-lg text-arial">
                  Why speech and language therapists (SLTs)?
                </h3>
                <p className="text-lg font-normal">
                  They play an essential role in <span className="font-bold"> increasing awareness</span> of assistive technologies and providing clients with  <span className="font-bold">training and support</span> key to maximising impact and promoting successful integration in daily life.
                </p>
              </div>
            </div>
          </div>

          <h2 className="font-bold text-3xl py-5">
            The challenge
          </h2>

          <div>

            <div className="mb-8 grid grid-cols-3 gap-10 text-lg font-normal text-gray-600">

              <div className="flex flex-col justify-start ">
                <h3 className="pt-3 pb-8 font-bold  text-fun-pink  text-lg text-arial">
                  There is a lack of AT usage.
                </h3>
                <p className="text-lg mr-6 font-normal">
                  <span className="font-bold"> No more than 40% </span>of people consistently used the AT for more than one year due to the drawbacks of traditional AT.
                </p>
              </div>

              <div className="flex flex-col justify-start ">
                <h3 className="pt-3 pb-1 font-bold  text-fun-pink  text-lg text-arial">
                  Project Relate is losing public awareness
                </h3>
                <p className="text-lg font-normal">
                  Its global download keeps dropping after reach a peak of 6k downloads in the first launching month.
                </p>
              </div>

              <div className="flex flex-col justify-start ">
                <h3 className="pt-3 pb-1 font-bold  text-fun-pink  text-lg text-arial">
                  SLTs report a lack of professional AT training
                </h3>
                <p className="text-lg font-normal">
                  Only 25% of SLTs believed in themselves to have the competence to provide AT services after training.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-audemic -mx-80 my-20 ">
          <div className="flex space-x-50 text-center justify-between py-5 mx-96">
            <div className="flex flex-col  my-auto">
              <p className="text-gray-800 text-xl font-bold pt-4 pb-2 ">The Goal</p>
              <p className="text-gray-500 text-xl px-10  pt-2 pb-4">Design the training material for SLTs to learn comprehensive knowledge of Project Relate and know how to introduce Project Relate to their clients<br />
              </p>
            </div>
          </div>
        </div>

        <div className="Text-left px-20 py-5">
          <h2 className="font-bold text-3xl py-5">
            Outcome
          </h2>
          <div className="flex space-x-8 justify-between pb-5 ">
            <div className="flex place-items-center rounded-lg border border-gray-300 p-4">
              <img className=" w-32" src="/static/projects/d-pic-1.png" />
              <p className="px-4 py-4 text-center text-xl font-normal">An online interactive training course for SLTs to learn about Project Relate.</p>
            </div>
            <div className="flex  place-items-center rounded-lg border border-gray-300 p-4">
              <img className=" w-32" src="/static/projects/d-pic-3.png" />
              <p className="px-4 py-4 text-center text-xl font-normal">The design has been integrated into the AT Innovation Portal with GDI Hub.</p>

            </div>

          </div>
        </div>

        <div className="Text-left px-20 py-5">
          <h2 className="font-bold text-3xl py-5">
            Design Method
          </h2>
          <img className="py-2 mx-auto w-11/12" src="/static/projects/d-method.png" />

          <h2 className="font-bold text-3xl py-5">
            Background & User Research
          </h2>
          <h3 className="font-medium text-2xl py-3">
            Functions of Project Relate
          </h3>
          <p className="text-gray-500 text-lg ">There are five functions of the app: Record, Listen, Repeat, Assistant and Keyboard.
          </p>
          <div className="flex space-x-11 my-4 px-6">
            <div className="flex flex-col items-center">
              <img className="w-11/12 relative rounded-md border border-gray-300  mt-5 "
                src="/static/projects/d-pic-reco.png"
              />
              <p className="my-4 text-center text-xs">People need to record 500 phrases before accessing other functions.</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-11/12 relative rounded-md  border border-gray-300 mt-5 "
                src="/static/projects/d-pic-lis.png"
              />
              <p className="my-4 text-center text-xs">Listen: real-time transcription for the speech of users.</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-11/12 relative rounded-md border border-gray-300 mt-5 "
                src="/static/projects/d-pic-repeat.png"
              />
              <p className="my-4 text-center text-xs">Repeat: restates short phrases by users and also help them interact with virtual assistants. </p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-11/12 relative rounded-md  border border-gray-300 mt-5 "
                src="/static/projects/d-pic-a.png"
              />
              <p className="my-4 text-center text-xs">Assistant: allows users to control Google Assistant on their phone.</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-11/12 relative rounded-md border border-gray-300 mt-5 "
                src="/static/projects/d-pic-key.png"
              />
              <p className="my-4 text-center text-xs">Keyboard: speech-to-text by Project Relate in any other app with a keyboard.</p>
            </div>
          </div>
          <h3 className="font-medium text-2xl py-2">
            Limitations of Project Relate website
            <p className="hover:underline text-fun-pink text-lg ">
              <a href="https://sites.research.google/relate/" >
                (Link to the website)
              </a>
            </p>
          </h3>

          <div className="mt-2 mb-8 grid grid-cols-3 gap-8 text-lg font-normal text-gray-600">

            <div className="flex flex-col justify-start  basis-1/4">
              <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                01/
              </h4>
              <h5 className="text-lg">
                It highlights benefits and weaken the drawbacks of the app;
              </h5>
            </div>
            <div className="flex flex-col justify-start  basis-1/4">
              <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                02/
              </h4>
              <h5 className="text-lg">
                It does not emphasise Custom card and Relate Keyboard functions;
              </h5>
            </div>
            <div className="flex flex-col justify-start  basis-1/4">
              <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                03/
              </h4>
              <h5 className="text-lg">
                It has only one-sided complimentary wording.
              </h5>
            </div>

          </div>


          <h3 className="font-medium text-2xl py-4">
            Current training methods
          </h3>
          <p className="text-gray-500 text-lg ">By three observations on the current avaiable Proejct Relate training for healthcare professionals, both important information and drawbacks of the training were discovered and shown in the journey map below.
          </p>
          <img className="w-11/12  mx-auto my-10 "
            src="/static/projects/d-pic-uj1.png"
          />

          <h3 className="font-medium text-2xl py-4">
            User feedback on current training
          </h3>

          <h4 className="font-normal text-xl pt-2">
            Key findings from the survey
          </h4>

          <div className=" mt-4 mb-16 grid grid-cols-4 gap-8 text-lg font-normal text-gray-600">

            <div className="flex flex-col justify-start  basis-1/4">
              <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                01/
              </h4>
              <h5 className="text-lg">
                SLTs prefer face-to-face training, online meeting and interactive instructions, rather than joint sessions with clients.
              </h5>
            </div>
            <div className="flex flex-col justify-start  basis-1/4">
              <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                02/
              </h4>
              <h5 className="text-lg">
                SLTs expect adding case studies showing how Relate can be used in real world.
              </h5>
            </div>
            <div className="flex flex-col justify-start  basis-1/4">
              <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                03/
              </h4>
              <h5 className="text-lg">
                Custom card, Assistant and Keyboard are thought as  useful functions to clients by SLTs
              </h5>
            </div>
            <div className="flex flex-col justify-start  basis-1/4">
              <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                04/
              </h4>
              <h5 className="text-lg">
                SLTs further want a quick start guide to deliver Relate to their clients.
              </h5>
            </div>
          </div>

          <h4 className="font-normal text-xl my-2">
            Result analysis
          </h4>

          <div className="grid grid-cols-2 gap-8 mt-4  mb-16">
            <img className="rounded-lg shadow-md"
              src="/static/projects/d-pic-s1.png"
            />
            <img className="rounded-lg shadow-md"
              src="/static/projects/d-pic-s2.png"
            /><img className="rounded-lg shadow-md"
              src="/static/projects/d-pic-s3.png"
            /><img className="rounded-lg shadow-md"
              src="/static/projects/d-pic-s4.png"
            />
          </div>
          <h2 className="font-bold text-3xl py-5">
            Co-design: Insights from SLTs
          </h2>

          <div className="py-2 grid grid-cols-3 space-x-20 justify-between ">
            <img className=" mx-auto" src="/static/projects/d-pic-co.png" />

            <p className="col-span-2 text-gray-500 text-lg self-center">
              A co-design workshop was conducted with three SLTs and one Project Relate specialist who are also the trainer to discuss the pros and cons of the current training and come up with ideas for their expected training methods.
            </p>

          </div>
          <div>
            <h4 className="font-medium text-xl mt-8">
              Key findings
            </h4>
            <h4 className="font-normal text-xl text-fun-pink mb-4">
              Related to the app
            </h4>
            <h5 className="text-lg my-5">
              Pros
            </h5>
            <img src="/static/projects/d-pic-pro.png"
            />
            <h5 className="text-lg my-5">
              Cons
            </h5>
            <img src="/static/projects/d-pic-con.png"
            />
          </div>

          <div>
            <h4 className="font-medium text-xl mt-8">
              Key findings
            </h4>
            <h4 className="font-normal text-xl text-fun-pink mb-4">
              Related to the training
            </h4>
            <div>
              <h5 className="text-lg mt-4">
                Pros
              </h5>

              <div className="mb-8 grid grid-cols-3 gap-8 text-lg font-normal text-gray-600">

                <div className="flex flex-col justify-start pr-32">
                  <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                    01/
                  </h4>
                  <h5 className="text-base font-medium">
                    Well introduced Custom Card
                  </h5>
                </div>
                <div className="flex flex-col justify-start pr-32">
                  <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                    02/
                  </h4>
                  <h5 className="text-base font-medium">
                    Delivered with lots of patience
                  </h5>
                </div>
                <div className="flex flex-col justify-start pr-28">
                  <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                    03/
                  </h4>
                  <h5 className="text-base font-medium ">
                    A phone with fully-functioned Relate to demonstrate
                  </h5>
                </div>
              </div>
            </div>

            <h5 className="text-lg mt-4">
              Cons
            </h5>

            <div className="mb-8 grid grid-cols-3 gap-x-8 text-lg font-normal text-gray-600">

              <div className="flex flex-col justify-start pr-32">
                <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                  01/
                </h4>
                <h5 className="text-base font-medium  ">
                  Not show what Relate can do until the end
                </h5>
              </div>
              <div className="flex flex-col justify-start pr-32">
                <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                  02/
                </h4>
                <h5 className="text-base font-medium">
                  Not suggest SLTs to train Relate before the session with clients
                </h5>
              </div>
              <div className="flex flex-col justify-start pr-32">
                <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                  03/
                </h4>
                <h5 className="text-base font-medium">
                  Technology focused making client think it is hard to use
                </h5>
              </div>
              <div className="flex flex-col justify-start pr-32">
                <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                  04/
                </h4>
                <h5 className="text-base font-medium">
                  Not assess the suitability of the client before introduction
                </h5>
              </div>
              <div className="flex flex-col justify-start pr-36">
                <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                  05/
                </h4>
                <h5 className="text-base font-medium ">
                  No video examples of its real users demonstrating it
                </h5>
              </div>
              <div className="flex flex-col justify-start pr-32">
                <h4 className="py-3 font-bold  text-fun-pink text-2xl text-arial">
                  06/
                </h4>
                <h5 className="text-base font-medium">
                  No accessibility consideration for clients (visual)
                </h5>
              </div>
            </div>
            <img src="/static/projects/d-pic-goal.png"
            />
            <h4 className="font-medium text-xl mt-8">
              Possible training method analysis
            </h4>
            <p className="col-span-2 text-gray-500 text-lg self-center">
              Several concepts were ideated based on the co-design workshop. According to the design points concluded above, the evaluation dimensions are summarised into scope of influence, information capacity usability,and labour input from trainers. Interactive webpage was selected as the training method.
            </p>
            <img className="mx-auto w-11/12 my-8" src="/static/projects/d-pic-comparison.png"
            />
          </div>
          <div>
            <h2 className="font-bold text-3xl py-5">
              Prototype and iterations
            </h2>
            <p className="col-span-2 text-gray-500 text-lg self-center">
              Low-fidelity protoypes were created based on reseaerch result. User testing was carried out with three designers and three SLTs to receive feedback and support iterations. The feedback from designers were mainly on the logic of user flow while SLTs mainly provided suggestions for content design.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-3xl pt-10 pb-5">
              Solution
            </h2>

            <div className="bg-PR-light -mx-80 my-5 ">
              <div className="flex space-x-50 text-center justify-between py-5 mx-96">
                <div className="flex flex-col  my-auto">
                  <img src="/static/projects/d-pic-so.png"
                  />
                </div>
              </div>
            </div>

            <h3 className="font-medium text-2xl py-3">
              Functions Explanation
            </h3>
            <p className="text-gray-500 text-lg ">
              The interactive course consists of Homepage, Suitability Checklist, Function Training, Custom Card Generator and Tool Kits.
            </p>

            <div className="place-content-center">
              <div className="bg-PR-bg relative w-full h-44 md:h-80 my-44 rounded-lg">
                <div className="absolute -top-28 left-24 grid grid-cols-2 items-center">
                  <img src="/static/projects/d-ui-hf.png" className="object-center w-96 rounded-lg shadow-md "
                  />
                  <div className="grid grid-col text-center mx-8 px-8">
                    <h3 className="py-3 font-bold text-fun-pink text-2xl">
                      01/Homepage
                    </h3>
                    <h4 className="font-bold text-fun-gray-darker text-xl">
                      Show Pros & Cons
                    </h4>
                    <h5 className="text-base font-light py-4">
                      From user research, people want to know the comprehensive fact about Project Relate to decide whether they want to use it.
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-24 grid grid-cols-2 gap-16 items-center">

              <div className="grid grid-col text-center">
                <h3 className="py-3 font-bold text-fun-pink text-2xl">
                  02/Suitability Checklist
                </h3>
                <h4 className="font-bold text-fun-gray-darker text-xl">
                  Assess suitability in advance
                </h4>
                <h5 className="text-base font-light py-4">
                  The checklist help SLTs assess whether their clients are suitable to use Project Relate before the learning. It also explains the reasons for each requirement.
                </h5>
                <img src="/static/projects/d-ui-sc.png" className="object-center w-full rounded-lg shadow-md mt-8"
                />
              </div>
              <div className="align-items-center rounded-lg h-full bg-PR-bg box-border shadow-md">

                <p className="px-4 my-8 text-center text-xl font-medium">Suitability Checklist</p>
                <div className="rounded-lg bg-PR-sbg box-border shadow-md h-80 w-10/12 mx-auto px-4 my-4  text-center">

                  <div className="my-auto">
                    <p className="py-3 font-medium text-xl">
                      They communicate in English in everyday life.
                    </p>

                    <p className="py-3 font-normal text-xl">
                      Project Relate can now only understand English. Note they are only American English.
                    </p>
                  </div>
                </div>
                {/* <button className="bg-sky-500 hover:bg-fun-pink bg-PR-light text-white px-8 py-3 rounded-full">
                  Save changes
                </button> */}

              </div>
            </div>

            <div className="relative rounded-lg h-full bg-PR-bg box-border shadow-md my-20 py-10">
              <button onClick={() => onClickLeftButton(checklistImgID, setChecklistImgID, checklistImgList1)} className="absolute left-8 top-1/2 rounded-full">
                <img src="/static/icons/left.svg" className="w-2/3"
                />
              </button>
              <button onClick={() => onClickRightButton(checklistImgID, setChecklistImgID, checklistImgList1)} className="absolute right-4 top-1/2 rounded-full">
                <img src="/static/icons/right.svg" className="w-2/3"
                />
              </button>
              <h5 className="text-base text-center font-light">
                There are three different results according to the situation chosen in the checklist.
              </h5>
              {/* <img id="Itest" src="/static/projects/d-ui-r1.png" className="mx-auto w-10/12 rounded-lg shadow-md mt-12" */}
              <img id="Itest" src={checklistImgList1[checklistImgID]} className="mx-auto w-10/12 rounded-lg shadow-md mt-12"
              />
            </div>

            <div className="relative rounded-lg bg-PR-bg box-border shadow-md my-20 py-10 text-center">
              <button onClick={() => onClickRightButton(checklistImgID, setChecklistImgID, checklistImgList2)} className="absolute left-8 top-1/2 rounded-full">
                <img src="/static/icons/left.svg" className="w-2/3"
                />
              </button>
              <button onClick={() => onClickRightButton(checklistImgID, setChecklistImgID, checklistImgList2)} className="absolute right-4 top-1/2 rounded-full">
                <img src="/static/icons/right.svg" className="w-2/3"
                />
              </button>

              <h3 className="py-3 font-bold text-fun-pink text-2xl">
                03/Function training
              </h3>
              <h4 className="font-bold text-fun-gray-darker text-xl">
                Use scenarios
              </h4>
              <h5 className="text-base font-light py-4 px-12">
                The training explains functions including Record, Custom Card, Listen, Repeat, Assistant and Keyboard. It introduces the interfaces and possible use scenarios of each function.
              </h5>
              {/* <div className=" h-32 w-32 p-4 "></div> */}
              {/* <img src="/static/projects/d-ui-re2.png" className=" left-20 w-10/12 mx-auto rounded-lg shadow-md mt-12" /> */}

              <img id="Itest" src={checklistImgList2[checklistImgID]} className="mx-auto w-10/12 rounded-lg shadow-md mt-12"
              />
            </div>

            <div className="place-content-center">
              <div className="bg-PR-bg relative w-full h-72 my-24 rounded-lg">
                <div className="absolute -top-4 right-24 grid grid-cols-3 items-center">
                  <div className="grid grid-col text-center mx-8 px-2">
                    <h3 className="py-3 font-bold text-fun-pink text-2xl">
                      04/Assessment
                    </h3>
                    <h4 className="font-bold text-fun-gray-darker text-xl">
                      Enhance the knwoledge
                    </h4>
                    <h5 className="text-base font-light py-4">
                      After the training, a simple assessment will take place to help enhance the knowledge learned before.
                    </h5>
                  </div>
                  <img src="/static/projects/d-ui-a.png" className="col-span-2 object-center w-full rounded-lg shadow-md "
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg h-full bg-PR-bg box-border shadow-md my-20 py-10">

              <div className="grid grid-col text-center mx-24  relative ">
                <h3 className="py-3 font-bold text-fun-pink text-2xl">
                  06-1/Tool Kits
                </h3>
                <h4 className="font-bold text-fun-gray-darker text-xl">
                  Training tips for SLTs
                </h4>
                <h5 className="text-base font-light py-4">
                  This is an optional section for SLTs to know tips about effective ways to deliver Project Relate to their clients.
                  These tips were concluded from co-design workshop with SLTs.
                </h5>
                <img src="/static/projects/d-ui-tip.png" className="object-center w-full rounded-lg shadow-md my-8"
                />
              </div>
            </div>

            <div className="my-24 relative rounded-lg w-full bg-PR-bg box-border shadow-md">
              <div className="grid grid-col text-center py-4 mx-24">
                <h3 className="py-3 font-bold text-fun-pink text-2xl">
                  06-2/Tool Kits
                </h3>
                <h4 className="font-bold text-fun-gray-darker text-xl">
                  Feedback forum
                </h4>
                <h5 className="text-base font-light py-4">
                  In this part, learners can upload their experience of using Project Relate, meeting the SLTs' needs of seeing real user feedback
                </h5>

              </div>
              <div className=" h-96 w-32 p-4 "></div>
              <div className="absolute mx-auto top-44 left-0">
                <img src="/static/projects/d-ui-fe.png" className="object-center mx-auto w-10/12 rounded-lg shadow-md my-8"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-3xl pt-10 pb-5">
              Tranformation into live website
            </h2>

            <p className="col-span-2 text-gray-500 text-lg self-center">
              After submitting my dissertation, I started to tranform my design into a website by WIX. Due to the limitation of the website builder and several user tests, the final outcome went through a series of changes.
            </p>
            {/* <div className="mx-auto"> */}
              <button className="rounded-lg bg-PR px-6 py-6 text-lg mx-auto my-8 text-white hover:bg-PR/70">  <a href="https://weiranzhou22.wixsite.com/relate-training" >
                          View the website  </a></button>
            {/* </div> */}
          </div>
        </div>
      </div>

    </Page >
  );
}
