import Page from "@/components/utility/Page";
import projects from "@/data/content/projects";

export default function project1() {
  return (
    <Page currentPage="Portfolio" meta={{ desc: "I'm a passionate web developer and designer coding beautiful websites and apps." }}>

      <img
        className="w-full relative rounded-md   will-change-projectCard my-5"
        src={projects[0].img1}
      />
      <div className="flex flex-col mt-20  space-y-4 mx-auto text-left">
        <h1 className="font-bold text-5xl px-20 text-gray-800">
          Title
        </h1>

        <p className="text-gray-500 text-xl px-20 py-5">
          line1<br />
          line 2
        </p>

        <div className="w-full h-0.5 bg-gray-500"></div>

        <div className="flex space-x-50 justify-between py-5 px-20">
          <div className="flex flex-col ">
            <p className="font-bold underline">Scope</p>
            <p>Problem framing<br />
            Concept development<br />
            User testing<br />
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">My Role</p>
            <p>User research<br />
            User experience<br />
            Ideation<br />
            UI design<br />
            User testing</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">Duration</p>
            <p>asdfasdf</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">Tools</p>
            <p>Figma<br />
            </p>
          </div>
        </div>
        <h2 className="font-bold text-3xl px-20">
          What's the context?
        </h2>
        <p className="text-gray-500 text-xl px-20 py-5">
          line1<br />
          line 2
        </p>
      </div>

      <div className="bg-red-600 -mx-40 my-20 text-white text-8xl font-bold py-10 ">
        ERROR
      </div>

    </Page>
  );
}
