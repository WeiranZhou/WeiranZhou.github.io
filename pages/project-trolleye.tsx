import Page from "@/components/utility/Page";
import projects from "@/data/content/projects";

export default function project1() {
  return (
    <Page currentPage="Portfolio" meta={{ desc: " " }}>

      <img
        className="w-full relative rounded-md   will-change-projectCard my-5"
        src={projects[4].img}
      />
      

     

    </Page>
  );
}
