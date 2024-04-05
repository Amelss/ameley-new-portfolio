import React from 'react'
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectCard({ eachProject }) {

    const {
        projectTitle, projectImage, projectDescription, projectLink
    } = eachProject.fields
    return (
      <div id="projects">
        <Image
          src={`https:${projectImage.fields.file.url}`}
          width={400}
          height={400}
          alt="hello"
          className="rounded-xl"
        />
        <h1>{projectTitle}</h1>
        <p className="pt-1 pb-8">
          {projectDescription}
        </p>
      </div>
    );
}
