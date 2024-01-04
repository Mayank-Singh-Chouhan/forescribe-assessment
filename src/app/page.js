import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className="bg-white flex flex-row w-screen max-h-screen text-[16px] font-[400] leading-normal">
        <Sidebar/>
        <Content />
      </main>
    </>
  );
}
