import Page from "@/components/utility/Page";
import projects from "@/data/content/projects";

export default function project1() {
  return (
    <Page currentPage="Portfolio" meta={{ desc: "This is my portfolio." }}>

      <img
        className="w-full relative rounded-md   will-change-projectCard my-5"
        src="/static/projects/bendo-s.jpg"
      />
      <div className="flex flex-col mt-20  space-y-4 mx-auto text-left">
        <h1 className="font-bold text-5xl px-20 text-gray-800">
          Bendo
        </h1>

        <p className="text-gray-500 text-xl px-20 py-5">
        Bendo is the brand name, which is a combination of bento and endometriosis. It offers people with endometriosis, our targeted users, the opportunity to disclose their condition in a friendly working environment and gain understanding from their colleagues and employers. The solution is a service which includes the Bendo lunchbox and app.
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
            <p>Background research<br />
            UI design<br />
              Ideation<br />
              System design<br/>
              Business development</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">Duration</p>
            <p>09/2022 - 11/2022</p>
          </div>
          
        </div>
        {/* <h2 className="font-bold text-3xl px-20 py-5">
          What's the context?
        </h2>
        <p className="text-gray-500 text-xl px-20 py-5">
          line1<br />
          line 2
        </p> */}
      </div>
   

      {/* <div className="bg-audemic -mx-40 my-20 ">

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

      </div> */}
   <h2 className="font-bold text-3xl px-20 py-1">
          What's the context?
        </h2>
        <img src="/static/projects/b-bg.png"/>
      <div className="flex flex-col mt-20 space-y-8 mx-auto text-left">
        

      

        <div className="h-[90]  rounded-xl">
         
        
          <img
           src="/static/projects/A4 - 4.jpg"
          />
           <img
           src="/static/projects/A4 - 5.jpg"
          />
           <img
           src="/static/projects/A4 - 6.jpg"
          />
           <img
           src="/static/projects/A4-7.jpg"
          />
           <img
           src="/static/projects/A4 - 8.jpg"
          />
           <img
           src="/static/projects/A4 - 9.jpg"
          />
        </div>

      </div>

    </Page >
  );
}
