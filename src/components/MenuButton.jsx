import Image from "next/image";

const MenuButton = ({ icon, name, isActive }) => {
  return (
    <>
      <div className={`flex items-center justify-start ${isActive ? "bg-[#F6EFFF]" : "bg-white"} hover:bg-[#F6EFFF] w-[90%] rounded-[5px] gap-[11px] pl-[24px] py-[14px] relative`}>
        {isActive && <span
          className={`absolute w-1 h-[calc(100%-20px)] bg-[#8B3DFF] rounded-[40px] left-0`}
        ></span>}
        <Image src={icon} alt="icon" height={19} width={21} unoptimized />
        <span>{name}</span>
      </div>
    </>
  )
}

export default MenuButton;