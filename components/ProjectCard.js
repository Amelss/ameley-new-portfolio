import React from 'react'
import Image from "next/image";

export default function ProjectCard({ eachProject }) {

    const {
        projectTitle, projectImage, projectDescription, projectLink
    } = eachProject.fields
    return (
      <div id='projects'>
        
        <Image
          src={`https:${projectImage.fields.file.url}`}
          width={400}
          height={400}
          alt="hello"
            />
            <h1>{projectTitle}</h1>



            
      </div>
    );
}
