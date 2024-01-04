import Image from "next/image";











const Tag = () => {
  return (
    <>
    <div className="py-[7px] px-[20px] mr-[-47px] text-[14px] bg-[#FF8D15] rounded-t-[5px] rounded-bl-[5px] text-[#FFF] relative">

      <div className="absolute top-[-15px] left-[-15px]">
        <Image src={"assets/main/cs-2.svg"} width={21} height={22} alt="hightlight" unoptimized/>
      </div>

      <span className="whitespace-nowrap">Coming soon</span>

      <div className="absolute right-0 bottom-[-12px]">
        <Image src={"assets/main/cs-1.svg"} width={16} height={13} alt="hightlight" unoptimized/>
      </div>
      
    </div>
    </>
  )
}

export default Tag;