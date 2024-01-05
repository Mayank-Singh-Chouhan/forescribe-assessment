import Image from "next/image";
import MainContent from "./MainContent";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col overflow-y-scroll">
        <Navbar />
        <MainContent />
        <Image className="fixed bottom-[20px] right-[20px]" src={"assets/main/floater.svg"} alt="floater" height={100} width={100} unoptimized />
      </div>
    </>
  )
}

export default Content;