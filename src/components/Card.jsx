import Image from "next/image";
import Button from "./Button";
import Tag from "./Tag";

const Card = ({ logo, title, details, tag, btn }) => {
  return (
    <div className={`card_background ${btn ? "" : "opacity-[0.65]"} flex justify-between items-center pr-[30px] pl-[20px] w-full h-[100px] rounded-[24px] border border-[#EFEFEF]`}>
      <div className="flex gap-[15px] items-center w-[80%]">
        <Image src={logo} width={52} height={52} alt="Logo" />
        <div className="flex flex-col w-auto">
          <div className="flex gap-[10px]">
            <h3 className="font-[500] text-[18px] text-[#19154E]">{title}</h3>
            {tag.length != 0 &&
              <div className="flex gap-[8px] justify-center items-center px-[12px] py-[6px] rounded-[5px] bg-[rgba(152,103,234,.2)]">
                {tag.length > 1 ? (
                  <>
                    <Image src={tag[1]} width={13} height={13} alt="icon" unoptimized />
                    <Image src={tag[0]} width={12} height={14} alt="icon" unoptimized />
                  </>
                ) : (
                  <Image src={tag[0]} width={37} height={13} alt="icon" unoptimized />
                )}
              </div>
            }
          </div>
          <p className="text-[#6B778C]">{details}</p>
        </div>
      </div>
      {btn ? <Button /> : <Tag />}
    </div>
  )
}

export default Card;