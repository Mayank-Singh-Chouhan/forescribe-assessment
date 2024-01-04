import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="sticky top-0">
            <div className="bg-white h-[70px] flex flex-row justify-between items-center px-[27px] border-b-[1px]">

                <div className="flex flex-row flex-1 gap-[33px]">
                    <Image src="assets/navbar/3671842_question_icon 4.svg" alt="Image" height={24} width={24} unoptimized />
                    <div className="bg-[#F5F5F5] flex w-full h-[44px] gap-[10px] pl-[24px]">
                        <Image src="assets/navbar/search.svg" alt="Search" height={18} width={18} unoptimized />
                        <input className="bg-transparent w-full outline-none" type="text" placeholder="Search by employee or application" />
                    </div>
                </div>

                <div className="flex flex-1 justify-end flex-row gap-[30px]">
                    <div className="flex text-[#8B3DFF] bg-[#F6F0FF] gap-[10px] px-[20px] py-[8px]">
                        <Image src="assets/navbar/Group 45.svg" alt="Invite" height={16} width={22} unoptimized />
                        <span>Invite members</span>
                    </div>
                    <Image src="assets/navbar/Group 15.svg" alt="Notifications" height={25} width={18} unoptimized />
                    <div className="flex gap-[12px] items-center">
                        <Image src="assets/navbar/Ellipse 3.svg" alt="Profile" height={36} width={36} unoptimized />
                        <Image src="assets/navbar/Vector.svg" alt="Options" height={5} width={10} unoptimized />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;