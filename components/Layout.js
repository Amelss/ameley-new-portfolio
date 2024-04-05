import Header from "./Header"
import Footer from "./Footer"

export default function Layout({children}) {
  return (
    <div className="relative min-h-screen">
      <div className=" ">
        <Header />
      </div>

      <div className="pb-[70px]">{children}</div>
      <div className="w-full absolute bottom-0 h-[70px] bg-slateBlue">
        <Footer />
      </div>
    </div>
  );
}
