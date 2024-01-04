import Image from "next/image";
import Card from "./Card";
import { mc_integration, mc_accounting, mc_engagement } from "../constants/index";










const MainContent = () => {
    return (
        <div className="flex-1 flex justify-center">
            <div className="w-[75%] py-[31px]">

                <div className="flex flex-col mb-[47px]">
                    <h1 className="font-[600] text-[#19154E] text-[28px] cursor-default">
                        Integrations
                    </h1>
                    <p className="text-[#3F4C5A] cursor-default">
                        Missing your favorite Integration? You can request one{" "}
                        <span className="text-[#8B3DFF] cursor-pointer">here</span>.
                    </p>
                </div>

                <div className="flex flex-col gap-[50px]">

                    <div className="flex flex-col gap-[20px]">

                        <div className="flex gap-[9px] font-[500] text-[20px] text-[#19154E]">
                            <h2>Identity and Single Sign On</h2>
                            <Image src={"assets/main/quesion-icon.svg"} height={18} width={18} alt="info" unoptimized/>
                        </div>

                        {mc_integration.map((ele) => {
                            return (
                                <Card title={ele.title} details={ele.detail} tag={ele.tag} btn={ele.btn}/>
                            );
                        })}

                    </div>

                    <div className="flex flex-col gap-[20px]">

                        <div className="flex gap-[9px] font-[500] text-[20px] text-[#19154E]">
                            <h2>Accounting</h2>
                            <Image src={"assets/main/quesion-icon.svg"} height={18} width={18} alt="info" unoptimized/>
                        </div>

                        {mc_accounting.map((ele) => {
                            return (
                                <Card title={ele.title} details={ele.detail} tag={ele.tag} btn={ele.btn}/>
                            );
                        })}

                    </div>

                    <div className="flex flex-col gap-[20px]">

                        <div className="flex gap-[9px] font-[500] text-[20px] text-[#19154E]">
                            <h2>Engagement</h2>
                            <Image src={"assets/main/quesion-icon.svg"} height={18} width={18} alt="info" unoptimized/>
                        </div>

                        {/* {NamedNodeMap} */}
                        {mc_engagement.map((ele) => {
                            return (
                                <Card title={ele.title} details={ele.detail} tag={ele.tag} btn={ele.btn}/>
                            );
                        })}

                    </div>

                </div>

            </div>
        </div>
    );

}
export default MainContent;