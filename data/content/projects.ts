import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Audemic Redesign",
    desc: "Redesign Audemic with a focus on people with ADHD",
    img: "/static/projects/3-cover.jpg",
    img1:"static/projects/cover-s-2.jpg",
    link: "/project-Audemic",
    tags: ["Accessibility", "UX Design", "Redesign","Web Design"],
  },
    
  {
    id: 1,
    title: "Bendo",
    desc: "Raise awareness for invisible disability - Endometriosis in the workplace. ",
    img: "/static/projects/2-cover.jpg",
    img1:"static/projects/cover-s-1.jpg",
    link: "/project-Bendo",
    tags: ["UX Design", "Service Design", "Mobile Design"],
  },
  {
    id: 2,
    
    title: "Book",
    desc: "Make digital reading effective",
    img: "/static/projects/1-cover.jpg",
    img1:"static/projects/cover-s-1.jpg",
    link: "/project1",
    tags: ["UX Design", "User Research", "Mobile Design"],
  },
  
  {
    id: 3,
    title: "Trolleye",
    desc: "An indoor navigation app designed for people with visual impairments to shop in-store independently.",
    img: "/static/projects/4-cover.jpg",
    img1:"static/projects/cover-s-1.jpg",
    link: "https://bitcointemp.com",
    tags: ["Accessibility", "UX Design","Mobile Design"],
  },

];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects