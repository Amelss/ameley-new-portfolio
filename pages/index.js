import { createClient } from "contentful";
import Hero from "@/components/Hero";
import About from "@/components/About";

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

  return {
    props: {
      theHeroSection: res.items,
      aboutMe: about.items,
    },
    revalidate: 10,
  };
}

export default function Home({ theHeroSection, aboutMe }) {
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
    </div>
  );
}
