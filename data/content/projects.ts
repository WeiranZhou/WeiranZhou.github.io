import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Book",
    desc: "Make digital reading effective",
    img: "/static/projects/1-cover.jpg",
    img1:"static/projects/cover-s-1.jpg",
    link: "/project1",
    tags: ["UX Design", "User Research", "Mobile Design"],
  },
  {
    id: 1,
    title: "Bendo",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/static/projects/2-cover.jpg",
    img1:"static/projects/cover-s-1.jpg",
    link: "/p",
    tags: ["UX Design", "Service Design", "Mobile Design"],
  },
  {
    id: 2,
    title: "Audemic Redesign",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/static/projects/3-cover.jpg",
    img1:"static/projects/cover-s-2.jpg",
    link: "/project2-Audemic",
    tags: ["Accessibility", "UX Design", "Redesign","Web Design"],
  },
  {
    id: 3,
    title: "Trolleye",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
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