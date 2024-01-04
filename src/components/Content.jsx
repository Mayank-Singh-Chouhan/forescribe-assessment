import MainContent from "./MainContent";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col overflow-y-scroll">
        <Navbar />
        <MainContent />
      </div>
    </>
  )
}

export default Content;