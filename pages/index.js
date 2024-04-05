import { createClient } from "contentful";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";


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
        <div className="bg-gray-100">
          <div className="xl:max-w-[1100px] xl:mx-auto 2xl:max-w-[1200px] 2xl:mx-auto">
            {aboutMe.map((myInfo) => (
              <About key={myInfo.sys.id} myInfo={myInfo} />
            ))}
          </div>
        </div>

        <div className=" bg-gray-100 pb-20">
          <div className="xl:max-w-[1100px] xl:mx-auto 2xl:max-w-[1100px] 2xl:mx-auto">
            <h1 className="font-bold text-center pb-5 text-1xl xl:text-4xl bg-gradient-to-r from-black to-slateBlue text-transparent bg-clip-text ">
              My Skills
            </h1>
            <div className="grid grid-cols-4 gap-y-3 xl:grid-cols-8">
              {skill.map((mySkills) => (
                <Skills key={mySkills.sys.id} mySkills={mySkills} />
              ))}
            </div>
          </div>
        </div>

        <div className="py-10 xl:max-w-[1100px] xl:mx-auto 2xl:max-w-[1200px] 2xl:mx-auto">
          <h1 className="font-bold text-center pb-7 xl:pb-14 text-1xl xl:text-4xl bg-gradient-to-r from-black to-slateBlue text-transparent bg-clip-text ">
            Recent Projects
          </h1>
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4 px-3 xl:px-6 xl:gap-5 ">
            {project.map((eachProject) => (
              <ProjectCard key={eachProject.sys.id} eachProject={eachProject} />
            ))}
          </div>
        </div>

        <div className="bg-gray-100 ">
          <div className="">
             <Contact />
          </div>
         
        </div>
      </div>
    </div>
  );
}
