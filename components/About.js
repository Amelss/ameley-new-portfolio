import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";


export default function About({ myInfo }) {
    
    const {
        aboutTitle, aboutName, aboutMeDescription, githubButton
    } = myInfo.fields;
  return (
    <div className="pt-20 pb-10 px-3 xl:px-20 text-center" id="about">
      <h1 className="font-bold text-sm">{aboutTitle}</h1>
      <h3 className="font-bold bg-gradient-to-r from-black to-slateBlue text-transparent bg-clip-text text-2xl xl:text-3xl py-5">
        {aboutName}
      </h3>
      <div className='pt-1 pb-8'>{documentToReactComponents(aboutMeDescription)}</div>
      <button className="flex items-center bg-slateBlue rounded-lg px-3 py-2 mx-auto ">
        <div>
          <Image
            src={"/github.png"}
            width={20}
            height={20}
            alt="hello"
            className=""
          />
        </div>
        <div>
          <a
            href={githubButton}
            target="blank"
            className="ml-1 text-white text-xs"
          >
            Github
          </a>
        </div>
      </button>
    </div>
  );
}
