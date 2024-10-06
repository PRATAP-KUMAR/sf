import { LiaSearchPlusSolid } from "react-icons/lia";
import { VscGlobe } from "react-icons/vsc";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineLocalLibrary } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#d7d7d7] fixed bottom-0 z-200 min-h-[64px] flex justify-around border w-full">
                <div className="items-center justify-center flex flex-col">
                    <LiaSearchPlusSolid size={24} />
                    <p>Home</p>
                </div>
                <div className="items-center justify-center flex flex-col">
                    <VscGlobe size={24} />
                    <p>Discover</p>
                </div>
                <div className="items-center justify-center flex flex-col">
                    <MdOutlineLocalLibrary size={24} />
                    <p>Library</p>
                </div>
                <div className="items-center justify-center flex flex-col">
                    <FaSignInAlt size={24} />
                    <p>Sign in</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;