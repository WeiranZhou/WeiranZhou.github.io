import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";



export default function Home() {
  return (
    <Page currentPage="Portfolio" meta={{ desc: "I'm an accessibility innovator." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
       
  
      </div>

    </Page>
  );
}
