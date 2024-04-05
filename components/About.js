import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export default function About({ myInfo }) {
    
    const {
        aboutTitle, aboutName, aboutMeDescription, githubButton
    } = myInfo.fields;
  return (
    <div className="py-20" id="about">
      <div>{documentToReactComponents(aboutMeDescription)}</div>
      About
      <h1>{aboutTitle}</h1>
      <h3>{aboutName}</h3>
      <button>
        <a href={githubButton}>Click ME</a>
      </button>
    </div>
  );
}
