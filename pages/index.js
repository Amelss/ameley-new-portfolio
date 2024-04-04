import { createClient } from "contentful";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "heroSection",
  });

  const about = await client.getEntries({
    content_type: "aboutSection",
  });

  const skills = await client.getEntries({
    content_type: "skillsSection",
    order: "sys.createdAt",
  });

  const projectSection = await client.getEntries({
    content_type: "projects",
  });

  return {
    props: {
      theHeroSection: res.items,
      aboutMe: about.items,
      skill: skills.items,
      project: projectSection.items
    },
    revalidate: 10,
  };
}

export default function Home({ theHeroSection, aboutMe, skill, project }) {
  return (
    <div>
      <div className="">
        {theHeroSection.map((theHero) => (
          <Hero key={theHero.sys.id} theHero={theHero} />
        ))}
      </div>

      <div className="">
        {aboutMe.map((myInfo) => (
          <About key={myInfo.sys.id} myInfo={myInfo} />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-y-3 xl:grid-cols-8">
        {skill.map((mySkills) => (
          <Skills key={mySkills.sys.id} mySkills={mySkills} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4 px-3">
        {project.map((eachProject) => (
          <ProjectCard key={eachProject.sys.id} eachProject={eachProject} />
        ))}
      </div>
    </div>
  );
}
