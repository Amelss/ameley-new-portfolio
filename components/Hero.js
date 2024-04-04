import Image from "next/image"

export default function Hero({ theHero }) {
    
    const {hero, title, subtitle, heroButton, intro} = theHero.fields
  return (
      <div>
          <Image src={`https:${hero.fields.file.url}`} width={400} height={400} alt="hello" />
          <h3>{intro}</h3>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button>Click me<a href={heroButton}></a></button>
          
      </div>
      
  )
}
