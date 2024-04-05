import Image from "next/image"

export default function Hero({ theHero }) {
    
    const {hero, title, subtitle, heroButton, intro} = theHero.fields
  return (
    <div
      id="hero"
      className="block xl:flex justify-center space-between items-center px-5 text-center xl:text-left xl:px-20 py-10"
    >
      <div>
        <h3 className="font-bold">{intro}</h3>
        <h1 className="font-bold text-2xl xl:text-5xl bg-gradient-to-r from-black via-slateBlue to-lavender text-transparent bg-clip-text">
          {title}
        </h1>
        <p className="xl:w-[500px] py-8">{subtitle}</p>
        <button className="flex items-center bg-slateBlue rounded-lg px-3 py-2 mx-auto xl:mx-0">
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
              href={heroButton}
              target="blank"
              className="ml-1 text-white text-xs"
            >
              Github
            </a>
          </div>
        </button>
      </div>
      <div>
        <Image
          src={`https:${hero.fields.file.url}`}
          width={400}
          height={400}
          alt="hello"
          className="mx-auto mt-6 xl:mt-0 xl:ml-10"
        />
      </div>
    </div>
  );
}
