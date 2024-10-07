import { BsArrowsCollapseVertical } from "react-icons/bs";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { VscGlobe } from "react-icons/vsc";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineLocalLibrary } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="hidden sticky top-0 h-screen left-0 h-screen desktop:flex flex-col justify-between desktop:flex-none w-[220px] bg-[#d1d1d1] p-5">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <img src="logoipsum.svg" alt="logoipsum" width={36} />
                        <p>Logoipsum</p>
                    </div>
                    <BsArrowsCollapseVertical size={20} />
                </div>
                <button className="w-full bg-white text-xs p-2 rounded-3xl border hover:border-green-900">New Thread <span><kbd className="bg-gray-200 p-1">Ctrl</kbd> <kbd className="bg-gray-200 p-1">I</kbd></span></button>
                <div className="flex flex-col gap-5">
                    <a className="items-center justify-start flex gap-2"
                        href="https://pratap.live"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LiaSearchPlusSolid size={24} />
                        <p>Home</p>
                    </a>
                    <a className="items-center justify-start flex gap-2"
                        href="https://pratap.live"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <VscGlobe size={24} />
                        <p>Discover</p>
                    </a>
                    <a className="items-center justify-start flex gap-2"
                        href="https://pratap.live"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MdOutlineLocalLibrary size={24} />
                        <p>Library</p>
                    </a>
                    <a className="items-center justify-start flex gap-2"
                        href="https://pratap.live"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaSignInAlt size={24} />
                        <p>Sign in</p>
                    </a>
                </div>
                <button className="w-full bg-green-800 hover:bg-green-400 p-2 text-white rounded-3xl font-bold">Sign Up</button>
            </div>
            <div>
                <p className="font-bold">Try Pro</p>
                <p className="text-gray-400 text-sm">Upgrade for image upload, smarter AI, and more Pro Search.</p>
                <button className="p-2 bg-gray-400 rounded-lg text-sm">Learn More</button>
                <div className="flex justify-between">
                    <button>Download</button>
                    <div className="flex justify-center gap-2">
                        <button>X</button>
                        <button>D</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;