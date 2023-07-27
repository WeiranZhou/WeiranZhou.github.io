import Page from "@/components/utility/Page";
import projects from "@/data/content/projects";
// import components from "@/components/utility/main.css"

export default function project1() {
  return (
    <Page currentPage="Portfolio" meta={{ desc: "This is my portfolio." }}>

      <img
        className="w-full relative rounded-md   will-change-projectCard my-5"
        src="/static/projects/a-cover-s.jpg"
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
        <h2 className="font-bold text-3xl px-20 py-1">
          What's the context?
        </h2>

        <p className="text-gray-500 text-xl px-20">
          ADHD is a growing global psychiatric disorder with life-long symptoms. There is a total estimate of 2.6million people in the UK with ADHD.</p>
        <div className="flex space-x-50 justify-between py-5 px-20">
          <div className="place-items-center rounded-lg box-border h-48 w-80 p-4  shadow-lg shadow-fun-pink-light/20">
            <img className="px-28" src="/static/icons/percent.svg" />
            <p className="px-4 py-4 text-center text-xl font-medium">Adults have the incidence rate of 3-4% to be diagnosed with ADHD.</p>

          </div>
          <div className=" rounded-lg box-border h-48 w-80 p-4  shadow-lg shadow-fun-pink-light/20">
          <img className="px-28" src="/static/icons/time.svg" />
            <p className="px-4 py-4 text-center text-xl font-medium">People with ADHD utilise strategies to improve academic performance.</p>

          </div>
          <div className="place-items-center rounded-lg box-border h-48 w-80 p-4  shadow-lg shadow-fun-pink-light/20">
          <img className="px-28" src="/static/icons/audio.svg" />
            <p className="px-4 py-4 text-center text-xl font-medium">Audemic aims to make research more accessible through audio.</p>

          </div>
        </div>
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
          <div className="overflow-x-auto w-full mx-auto flex my-3">
            <img
              className="w-11/12 mx-auto relative my-3"
              src="/static/projects/a-pro-1.jpg"
            />
            <img
              className="w-11/12 mx-auto relative my-3"
              src="/static/projects/a-pro-2.jpg"
            />
            <img
              className="w-11/12 mx-auto relative my-3"
              src="/static/projects/a-pro-3.jpg"
            />
          </div>
          <p className="text-gray-500 text-center text-xl px-5 py-2">
            Scroll in horizon to view all pictures.
          </p>

        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            What are the expectations from users?
          </h2>
          <p className="text-gray-500 text-xl px-20 py-2">
            I checked and official website and “Request a feature” webpage of Audemic and found the needs from users.
          </p>
          <img
            className="w-11/12 mx-auto relative my-3"
            src="/static/projects/a-user-feedback.jpg"
          />
        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            User Research
          </h2>
          <p className="text-gray-500 text-xl px-20 py-2">
            I interviewed three students who have research needs about their opinions on audible research paper and concluded the interview into the persona that features general users that Audemic wants to maintain.
          </p>
          <img
            className="w-11/12 mx-auto relative my-3"
            src="/static/projects/a-general-users.jpg"
          />
          <p className="text-gray-500 text-xl px-20 py-2">
            I conducted online desk research on the symptoms of ADHD, and their strategies to improve productivity in learning and created the persona of ADHD users that Audemic has opportunities to expand on.
          </p>
          <img
            className="w-11/12 mx-auto relative my-3"
            src="/static/projects/a-adhd-users.jpg"
          />
        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            Product Strategy
          </h2>
          <p className="text-gray-500 text-xl px-20 py-2">
            Based on the analysis above, I concluded a product strategy for improving Audemic and targeting ADHD user group.
          </p>

          <div className="grid grid-cols-3 space-x-50 gap-y-10 justify-between py-5 px-20">

            <div className="flex flex-col ">
              <p className="font-bold text-xl mb-2">User Experience</p>
              <p>Easily create folders<br />
                Track & edit highlights<br />
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-xl mb-2 ">Maintain Users</p>
              <p>Refer to friends<br />
                Study together<br />
                Share notes<br />
                Friends rating
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-xl mb-2">For ADHD</p>
              <p>Generate mind-map<br />
                Break down tasks<br />
                Create motivation</p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-xl mb-2">Listening</p>
              <p>Auto scrolling<br />
                Manually correct pronunciation</p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-xl mb-2">Motivation</p>
              <p>Reward for finishing tasks<br />
                Personalise notes<br />
                Less repetitive features</p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-xl mb-2">Productivity</p>
              <p>Summarise key statements<br />
                Edit highlights<br />
                Dictionary</p>
            </div>


          </div>


        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            Information Architecture Comparison
          </h2>
          <p className="text-gray-500 text-xl px-20 py-2">
            I created the information architecture before designing new interfaces. Improvements were made in the priority of sidebar, new note-taking funtions for ADHD users, competition & reward incentive in friend circle.
          </p>
          <a href="static/projects/a-comparison.jpg">
            <img
              className="w-11/12 mx-auto relative my-3"
              src="/static/projects/a-comparison.jpg"
            /></a>
        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 pt-5 pb-1">
            Design Outcome
          </h2>
          <h3 className="font-normal text-2xl px-20 pt-5 pb-1">
            Basic user experience
          </h3>
          <p className="text-gray-500 text-xl px-20 py-2">
            I changed the order in sidebar to demonstrate importance by order of appearance. In profile page, I change the layout of buttons to made useful information distinguishable to users. I added a refer and reward section to attract more users, and move the help icon to the top.<br />
            In Papers, I moved Folders visible beside inserted papers and added bulk edit function to make organising papers easier.  And a highlight and no-taking user flow was designed to enable flexible highlights along listening/reading.
          </p>

          <img
            className="h-[90]  rounded-xl"
            src="/static/projects/a-maintian.jpg"
          />
          <img
            className="h-[90]  rounded-xl"
            src="/static/projects/a-folder.jpg"
          />
          <img
            className="h-[90]  rounded-xl"
            src="/static/projects/a-productivity.jpg"
          />
          <h3 className="font-normal text-2xl px-20 pt-5 pb-1">
            Functions for ADHD Users
          </h3>
          <p className="text-gray-500 text-xl px-20 py-2">
            Borad Version was introduced to divide papers visually into small tasks and the colourful interfaces maintain interest of ADHD users. Mindmap is proven a useful tool for people with ADHD to improve productivity in learning. Therefore, I designed the Mindmap function that automatically organises the highlights users made.
          </p>

          <img
            className="h-[90]  rounded-xl"
            src="/static/projects/a-board.jpg"
          />
          <img
            className="h-[90]  rounded-xl"
            src="/static/projects/a-mindmap.jpg"
          />
          <h3 className="font-normal text-2xl px-20 pt-5 pb-1">
            Collaboration
          </h3>


          <img
            className="h-[90]  rounded-xl"
            src="/static/projects/a-motivation.jpg"
          />
        </div>
        <div className="bg-audemic -mx-40 my-16 ">
        <h2 className="font-bold text-3xl px-60 py-5">
            Reflections
          </h2>
          <p className="px-60 pb-5 text-base">From this project, I have the chance of learning the group of people with ADHD. I gained knowledge of their smyptoms and official treatment from research papers. However, it is the YouTube ADHD channels and online forums that told me the most effective treatment from the real individuals with ADHD. They can just be a mind map, a self-reward mechanison and a technique of breaking tasks. These interesting methods I collected from real users are much useful than reading papers. I got to know my passion in conducting user research with people and design solutions to improve their life experience.</p>
        </div>
      </div>

    </Page >
  );
}
