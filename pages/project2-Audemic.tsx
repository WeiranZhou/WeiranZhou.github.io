import Page from "@/components/utility/Page";
import projects from "@/data/content/projects";

export default function project1() {
  return (
    <Page currentPage="Portfolio" meta={{ desc: "I'm a passionate web developer and designer coding beautiful websites and apps." }}>

      <img
        className="w-full relative rounded-md   will-change-projectCard my-5"
        src={projects[2].img1}
      />
      <div className="flex flex-col mt-20  space-y-4 mx-auto text-left">
        <h1 className="font-bold text-5xl px-20 text-gray-800">
          Redesign Audemic
        </h1>

        <p className="text-gray-500 text-xl px-20 py-5">
          Audemic is an app that allows researchers and students to listen to academic papers, with a focus on increasing comprehension for a diverse range of users with learning differences and neuro diversities.<br />
          By evaluating current interfaces of Audemic and researching the needs of ADHD students, the novel design has added customised functions and gamified elements which cater to the behaviour pattern of people with ADHD.
        </p>

        <div className="w-full h-0.5 bg-gray-300"></div>

        <div className="flex space-x-50 justify-between py-5 px-20">
          <div className="flex flex-col ">
            <p className="font-bold underline">Scope</p>
            <p>Problem framing<br />
              Concept development<br />
              <br />
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">My Role</p>
            <p>User research<br />
              User experience<br />
              Ideation<br />
              UI design</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">Duration</p>
            <p>09/2022 - 12/2022</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">Client</p>
            <a href="https://audemic.io/">Audemic</a>
          </div>
        </div>
        <h2 className="font-bold text-3xl px-20 py-5">
          What's the context?
        </h2>
        <p className="text-gray-500 text-xl px-20 py-5">
          line1<br />
          line 2
        </p>
      </div>

      <div className="bg-audemic -mx-40 my-20 ">

        <div className="flex space-x-50 justify-between py-5 px-40">
          <div className="flex flex-col w-1/2">
            <p className="text-gray-800 text-2xl font-bold pt-10 pb-4">The Challenge</p>
            <p className="text-gray-500 text-xl px-16">Redesign the user experience flow and user interface to increase the user engagement on Audemic.
            </p>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-gray-800 text-2xl font-bold pt-10 pb-4">The Goal</p>
            <p className="text-gray-500 text-xl px-10 ">Help Audemic maintain more users.<br />
              Meet the needs and attract users with ADHD.
            </p>
          </div>

        </div>

      </div>

      <div className="flex flex-col mt-20 space-y-8 mx-auto text-left">
        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            What problems does current Audemic have?
          </h2>
          <p className="text-gray-500 text-xl px-20 py-2">
            I used Audemic for one month and analysed the space for improvement of current UI.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            What are the expectations from users?
          </h2>
          <p className="text-gray-500 text-xl px-20 py-2">
            I checked and official website and “Request a feature” webpage of Audemic and found the needs from users.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            User Research
          </h2>
          <p className="text-gray-500 text-xl px-20 py-2">
            I checked and official website and “Request a feature” webpage of Audemic and found the needs from users.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            Product Strategy
          </h2>
          <p className="text-gray-500 text-xl px-20 py-2">
            Based on the analysis above, I concluded a product strategy for improving Audemic and targeting ADHD user group.
          </p>
          <img
            className="w-10/12 mx-auto relative my-3"
            src="/static/projects/a-strategy.jpg"
          />
        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            Information Architecture Comparison
          </h2>
          <p className="text-gray-500 text-xl px-20 py-2">
            I created the information architecture before designing new interfaces. Improvements were made in the priority of sidebar, new note-taking funtions for ADHD users, competition & reward incentive in friend circle.
          </p>
          <img
            className="w-11/12 mx-auto relative my-3"
            src="/static/projects/a-comparison.jpg"
          />
        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            Design Outcome
          </h2>
         
          <img
            className="w-11/12 mx-auto relative my-3"
            src="/static/projects/a-comparison.jpg"
          />
        </div>

      </div>

    </Page>
  );
}
