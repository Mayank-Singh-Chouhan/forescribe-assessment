import Image from "next/image";
import { menu_info, settings_info } from "../constants/index";
import MenuButton from "./MenuButton";

const Sidebar = () => {
    return (
        <div className="bg-white flex flex-col justify-between h-screen w-[280px] border sticky top-0 bottom-0 left-0">

            <div className="h-[70px] border-b-[1px] flex justify-center items-center">
                <Image src="assets/sidebar/Logo.svg" height={34} width={146} alt="Logo" />
            </div>

            <div className="flex flex-col gap-[39px] overflow-y-scroll">

                <div className="text-[#19154E] w-full flex flex-col items-center">

                    <MenuButton icon={"assets/sidebar/insights.svg"} name={"Insights"} isActive={false} />

                    <span className="text-[13px] text-[#8B91A9] mt-[25px] mb-[20px] ml-[34px] self-start">MENU</span>

                    <div className="w-full flex flex-col items-center gap-[15px]">
                        {menu_info.map((ele) => {
                            return (
                                <MenuButton icon={ele.icon} name={ele.name} isActive={false} />
                            );
                        })}
                    </div>

                    <span className="text-[13px] text-[#8B91A9] mt-[25px] mb-[20px] ml-[34px] self-start">SETTINGS</span>

                    <div className="w-full flex flex-col items-center gap-[15px]">    
                        {settings_info.map((ele) => {
                            return (
                                <MenuButton icon={ele.icon} name={ele.name} isActive={ele.name === "Integrations"} />
                            );
                        })}
                    </div>
                    
                </div>
            </div>

            <div>
                <div className="h-[80px] flex px-[30px] py-[15px] gap-[42px] border-t-[1px]">

                    <div className="flex justify-center items-center gap-[12px]">
                        <div className="flex justify-center items-center bg-[#8B3DFF] h-[32px] w-[32px] rounded-[3px]">
                            <Image src="assets/sidebar/9040610_person_workspace_icon 1.svg" height={16} width={16} alt="Logo" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#19154E] leading-[30px] whitespace-nowrap">Webex Starship</p>
                            <p className="text-[#3F4C5A] text-[12px]">charlie@webex.com</p>
                        </div>
                    </div>

                    <Image src="assets/sidebar/Vector (5).svg" height={5} width={10} alt="Logo" />

                </div>
            </div>

        </div>
    )
}

export default Sidebar;