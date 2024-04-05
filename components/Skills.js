import React from "react";
import Image from "next/image";

export default function Skills({ mySkills }) {
  const { skillTitle, skillImage } = mySkills.fields;
    return (
      <div className="" id="skills">
       
        <Image
          src={`https:${skillImage.fields.file.url}`}
          width={50}
          height={50}
                alt="skills"
                className="mx-auto"
        />
      </div>
    );
}
