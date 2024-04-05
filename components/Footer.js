import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-5">
      <ul className="flex items-center justify-center">
        <a href="https://github.com/Amelss" target="blank"><Image src={"/github.png"} width={30} height={30} alt="github" className="" /></a>
         <a href="https://www.linkedin.com/in/ameley-kwei-armah-38a00310a/" target="blank"><Image src={"/linkedin.png"} width={35} height={35} alt="linkedin" className="ml-3"/></a> 
       <a href="https://twitter.com/genibi_bae" target="blank"><Image src={"/twitter.png"} width={30} height={30} alt="twitter" className="ml-3"/></a> 
      
      </ul>
    </div>
  );
}
