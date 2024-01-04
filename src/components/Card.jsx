import Image from "next/image";
import Button from "./Button";
import Tag from "./Tag";







const Card = ({ title, details, tag, btn }) => {
  return (
    <div className={`${btn ? "bg-[#EFEFEF]" : "rgba(239 239 239, 0.5"}  flex justify-between items-center pr-[30px] pl-[20px] w-full h-[100px] rounded-[24px] border border-[#EFEFEF]`}>

      <div className="flex gap-[15px] items-center w-[80%]">

        <div className="h-[52px] w-[52px] text-[#8B3DFF] font-bold flex justify-center items-center text-5xl bg-white rounded-[10px]">G</div>

        <div className="flex flex-col w-auto">

          <div className="flex gap-[10px]">

            <h3 className="font-[500] text-[18px] text-[#19154E]">{title}</h3>

            {tag && <div className="flex px-[12px] py-[6px] rounded-[5px] bg-slate-300">
              <Image src={tag} width={37} height={13} alt="icon" unoptimized />
            </div>}

          </div>

          <p className="text-[#6B778C]">{details}</p>

        </div>

      </div>

      {btn ? <Button /> : <Tag/>}

    </div>
  )
}

export default Card;