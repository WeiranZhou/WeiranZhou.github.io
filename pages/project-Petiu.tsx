import Page from "@/components/utility/Page";
import projects from "@/data/content/projects";
// import components from "@/components/utility/main.css"

export default function project1() {
  return (
    <Page currentPage="Portfolio" meta={{ desc: "This is my portfolio." }}>

      <img
        className="w-full relative rounded-md   will-change-projectCard my-5"
        src="/static/projects/c-cover.jpg"
      />
      <div className="flex flex-col mt-20  space-y-8 mx-auto text-left">
        <h1 className="font-bold text-5xl px-20 text-gray-800">
          Petiu: A pet farewell service system
        </h1>

        <p className="text-gray-500 text-xl px-20 py-5">
          Petiu, stand for Pet To You, is a pet farewell service system for people who have lost their pets. The service was desiged based on the wish from pet owners that they hope their pets can still be delightful and positive after death. The core of Petiu is rebirth, combining the life of pets with plants to continue a sustainable life or spirit of pets for their human friends. Petiu wishes to warm the heart of pet owners and make the preocess lighter to carry when it comes to the death of beloved pet friends.
        </p>

        <div className="w-full h-0.5 bg-gray-300"></div>

        <div className="flex space-x-50 justify-between py-6 px-20">
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
              UI design<br />
              Ideation<br />
              Service design </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">Duration</p>
            <p>04/2021 - 07/2021</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold underline">Award</p>
            <a href="https://audemic.io/">China Collegiate Computing Contest:<br />
              Mobile Application Innovation Contest -Third Prize</a>
          </div>
        </div>
        <h2 className="font-bold text-3xl px-20 py-4">
          What's the context?
        </h2>
        <img src="/static/projects/c-bg.png" />

      </div>

      <div className="bg-petiu -mx-40 my-16 ">

        <div className="flex space-x-50 justify-between py-5 px-40">
          <div className="flex flex-col w-1/2">
            <p className="text-gray-800 text-2xl font-bold pt-10 pb-4">The Challenge</p>
            <p className="text-gray-500 text-xl px-16 pb-8">How to ease the pain of pet owners after the death of their pets while making them accept the fact?
            </p>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-gray-800 text-2xl font-bold pt-10 pb-4">The Goal</p>
            <p className="text-gray-500 text-xl px-10 ">Design a pet funeral service for pet owners to experience feelings of empathy, caring and healing.
            </p>
          </div>

        </div>

      </div>

      <div className="flex flex-col mt-20 space-y-8 mx-auto text-left">
        <div>
          <h2 className="font-bold text-3xl px-20 py-1">
            Design Methods
          </h2>
          <img className="my-20 w-9/12 mx-auto" src="/static/projects/c-method.png" />
          <h2 className="font-bold text-3xl px-20 py-5">
            How is the current pet funeral worldwide?
          </h2>
          <p className="text-gray-500 text-xl px-20">
            We searched for companies that provide pet funeral service worldwide and found out they generally reflect funeral of human on pets, with the process of dressing up body, ritual ceremony, cremation and preserve cremains. They provide various memorial products for people to remember their pets. <br />
            Although most people in China do not have religions, they tend to held the Buddhist funeral for their pets, indicating a special attitude to pets' funeral.
          </p>
          <div className="overflow-x-auto max-w-max mx-16 flex ">

            <img
              className="w-3/5 object-contain mx-auto relative "
              src="/static/projects/c-co-07.jpg"
            />
            <img
              className="w-3/5 object-contain mx-auto relative"
              src="/static/projects/c-co-08.jpg"
            />
            <img
              className="w-3/5 object-contain mx-auto relative"
              src="/static/projects/c-co-09.jpg"
            />
            <img
              className="w-3/5 object-contain mx-auto relative"
              src="/static/projects/c-co-10.jpg"
            />
          </div>
          {/* <p className="text-gray-500 text-center text-xl px-5">
            Scroll in horizon to view all pictures.
          </p> */}
          <img
            className="w-10/12 object-contain mx-20 relative my-3"
            src="/static/projects/c-com.png"
          />
          <p className="text-gray-500 text-xl px-20 py-10">
            Overall, we found the current pet funeral is almost a copy of human's. They simply use memorable products to ease the pain of losing a pet and only few of them provide mental health guidance.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 py-5">
            User Research
          </h2>
          <img
            className="w-10/12 mx-auto relative my-8"
            src="/static/projects/c-user.png"
          />

          <h3 className="font-medium text-2xl px-20 py-2">
            Survey
          </h3>
          <p className="text-gray-500 text-xl px-20 py-6">
            We first conducted online survey about the attitue towards pet funeral. The questions were different for people who have/once-had pets and people who have never had pets. The results showed a supportive attitude to hold funeral to pets. The biggest finding was <span className="font-bold">people's expectation for pet funeral was different from that of human being.</span>
          </p>
          <p className="text-gray-500 text-xl px-20 pt-6 pb-3">
            The online survey recieved 136 valid answers, of which 64% have or once had pets. Most of them are females and in their mid-20s.
          </p>
          <img
            className="w-10/12 mx-auto relative my-20"
            src="/static/projects/c-re.png"
          />
          <img
            className="w-10/12 mx-auto relative my-16"
            src="/static/projects/c-re2.png"
          />
          <h3 className="font-medium text-2xl px-20 pb-2">
            Findings from survey
          </h3>
          <p className="text-gray-500 text-xl leading-loose px-20 py-6">
            · Not satisfied with current pet funeral service is the main reason tha some people refuse pet funeral.<br />
            · People tend to express their negative feelings about losing pets with those who share similar experiences.<br />
            · Memento product of pets is not a must for people.
          </p>
          <h3 className="font-medium text-2xl px-20 py-2">
            Interview & Design Points
          </h3>
          <p className="text-gray-500 text-xl px-20 py-6">
            Then, we interviewed four participants who had once lost their pets and asked them their feelings and methods to go out of the grief. We analysed their pain points and did another interview to figure out their ideal situation for pet funeral. At last we came up with three design points to guide our following design.
          </p>
          <img
            className="w-10/12 mx-auto relative my-16"
            src="/static/projects/c-pro.png"
          />
        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 py-5">
            Prototype
          </h2>
          <div className="grid md:grid-cols-2 space-x-50 gap-y-10 justify-center py-5 px-10">

            <div className="flex flex-col ">
              <img
                className="w-10/12 object-contain mx-auto relative "
                src="/static/projects/c-pic-.png" />
            </div>

            <div className="flex flex-col my-auto mx-10">
              <p className="font-bold text-xl mb-2 ">Role Play</p>
              <p>We printed our first draft of service flow. A small model of the service scene was made to assist the explanation. In prototype process, we invited four people to go through the service flow and asked them to give us feedback.
              </p>
            </div>
            <div className="text-right flex flex-col my-auto mx-10">
              <p className="font-bold text-xl mb-2 ">Wireframe</p>
              <p>We created the wireframes and an information architecture for usability test. The four participants were asked to do card-sorting in order for us to better categorise functions. They also completed tasks with the interactive wireframes. Modifications were made according to the user test.
              </p>
            </div>
            <div className="flex flex-col ">
              <img
                className="w-10/12 object-contain mx-auto relative "
                src="/static/projects/ctest.png" />
            </div>
          </div>

        </div>

        <div>
          <h2 className="font-bold text-3xl px-20 py-5">
            Solution
          </h2>
          <p className="text-gray-500 text-xl px-20 py-6">
            After user test and validation, the service was modified and the main touch pionts are shown below.
          </p>
          <div className="grid md:grid-cols-2 space-x-50 gap-y-10 justify-center py-5 px-10">
            <img
              className="w-10/12 object-contain mx-auto relative "
              src="/static/projects/c-po1.png" /><img
              className="w-10/12 object-contain mx-auto relative "
              src="/static/projects/c-po.png" />
          </div>
          <p className="text-gray-500 text-xl px-20 py-6">
            The service blueprint is shown below. There are three main use scenarios: home, garden and mourning hall.
          </p>
          <img className="w-11/12 mx-auto" src="/static/projects/c-sc.png" />

          <div className="overflow-x-scroll my-10 mx-10 flex ">
            <img className="max-w-max w-[40cm] " src="/static/projects/c-se.png" />

          </div>
          {/* <div className="grid md:grid-cols-1 space-x-5 gap-y-10 justify-items-start py-5 px-10"> */}

          {/* <img className="w-fit" src="/static/projects/c-tou.png" />
          </div> */}
          {/* <div className="grid md:grid-cols-2 space-x-8 gap-y-10 justify-center py-5 px-10">

            <div className="flex flex-col ">
              <img
                className="max-w-3xl object-contain mx-auto relative "
                src="/static/projects/c-tou.png" />
            </div>
            
          </div> */}
          <div className="flex md:flex-cols-2 gap-y-10 justify-center py-5 px-10">
            <div className="flex flex-col py-32 pr-20 justify-start">
              <p className="font-bold text-xl mb-2 ">System map</p>
              <p className="text-justify ">The map on the right shows the detailed service and labours invloved in Petiu. It explains how finance, material and information exchange among these points.
              </p>
              <img className="my-12 w-4/6" src="/static/projects/c-flo.png" />
            </div>
            <div className="flex flex-col ">
              <img
                className="max-w-2xl object-contain mx-auto  "
                src="/static/projects/c-sys.png" />
            </div>

          </div>
          <div className="flex flex-col px-10 py-5 ">
            <p className="font-bold text-xl mb-5 ">Touch points</p>
            <p className="text-justify mb-5">The map on the left explain how each touch point of the service works in different stages. You can see different lines of current customers, previous customers and potential future customers in the map, showing a unique selling point of Petiu which is linking people who share the similar experience of losing their pets together to comfort each other.
            </p>
            <img
              className="w-10/12 mx-auto relative my-8"
              src="/static/projects/c-t.png"
            />
            <img
              className="w-10/12 mx-auto relative mt-8 mb-4"
              src="/static/projects/c-tou.png"
            />
            <p className="text-gray-500 text-center text-lg px-5">
              Touch point map
            </p>
          </div>

        </div>
        <div className="bg-petiu -mx-40 my-16 ">
          
        </div>
      </div>

    </Page >
  );
}
