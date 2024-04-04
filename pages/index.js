import { createClient } from "contentful";
import Hero from "@/components/Hero";



export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "heroSection",
  });

  return {
    props: {
      theHeroSection: res.items,
    },
    revalidate: 10,
  };
}

export default function Home({theHeroSection}) {
  return (
      <div className="">
      {theHeroSection.map((theHero) => (
          <Hero key={theHero.sys.id} theHero={theHero} />
        ))}
      </div>
   
  );
}
