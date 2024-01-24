import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";

import Testimonials from "@/components/home/Testimonials";
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  return (
    <Page currentPage="Portfolio" meta={{ desc: "I'm an accessibility innovator." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
       
        {/* <Testimonials /> */}
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      
      {/* <CTA /> */}
    </Page>
  );
}
