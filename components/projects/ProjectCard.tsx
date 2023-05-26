import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div
      className="w-full px-12 mx-auto flex flex-col projects-center md:projects-start md:justify-center"
      key={project.id}
    >
      <Link
        href={project.link}
        
      >
        <img
          className="w-full relative rounded-md  hover:-translate-y-2 hover:opacity-75 will-change-projectCard"
          src={project.img}
        />
      </Link>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.link} target="_blank">
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </a>
          <div className="space-x-2">
            {/* {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )} */}
            {/* {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )} */}
          </div>
        </div>
        <p className="text-fun-gray text-left text-lg">{project.desc}</p>
        <ul className="flex flex-wrap items-center mb-4 mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 rounded-lg text-sm bg-white drop-shadow-md py-1 px-2 cursor-pointer hover:opacity-75">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;