import React from "react";
import { designs } from "@/data/content/designs";
import projects from "@/data/content/projects";
import ProjectCard from "../projects/ProjectCard";

function Designs() {
  return (
    <div className="px-20 grid grid-cols-1 gap-8 md:grid-cols-1 items-start">
      {projects.slice(0, 4).map((item) => {
        return (
          <ProjectCard key={item.id} project={item} />
        );
      })}
      {/* {designs.map((item, index) => {
        return (
          <div
            className="w-full"
            key={index}
          >
            <div className="flex gap-10">
            <a href={item.link} target="_blank" className="w-full">
              <img
                className="w-full h-96 hover:opacity-75 transition-opacity object-cover"
                src={item.img}
              />
            </a>
            <p>
              {item.description}
            </p>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default Designs;
