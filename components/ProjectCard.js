import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectCard({ eachProject }) {
  const {
    projectTitle,
    projectImage,
    projectDescription,
    projectLink,
    languagesUsed,
  } = eachProject.fields;

  return (
    <div id="projects" className="mx-auto">
      <a href={projectLink} target="blank" className="pointer">
        <Image
          src={`https:${projectImage.fields.file.url}`}
          width={400}
          height={400}
          alt="hello"
          className="rounded-xl shadow-md"
        />
        <h1 className="font-bold text-xs xl:text-sm pt-3 px-1 text-slateBlue hover:opacity-50">
          {projectTitle}
        </h1>
      </a>
      <div className="text-xs px-1 ">
        
           
             <p>{languagesUsed}</p>
       
      </div>
       
     
    </div>
  );
}
