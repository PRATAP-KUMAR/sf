import { LiaSearchPlusSolid } from "react-icons/lia";
import { VscGlobe } from "react-icons/vsc";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineLocalLibrary } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="desktop:hidden">
            <div className="bg-[#d7d7d7] fixed bottom-0 z-200 h-16 items-center flex justify-around border w-full">
                <a className="items-center justify-center flex flex-col"
                    href="https://pratap.live"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LiaSearchPlusSolid size={24} />
                    <p>Home</p>
                </a>
                <a className="items-center justify-center flex flex-col"
                    href="https://pratap.live"
                    target="_blank"
                    rel="noreferrer"
                >
                    <VscGlobe size={24} />
                    <p>Discover</p>
                </a>
                <a className="items-center justify-center flex flex-col"
                    href="https://pratap.live"
                    target="_blank"
                    rel="noreferrer"
                >
                    <MdOutlineLocalLibrary size={24} />
                    <p>Library</p>
                </a>
                <a className="items-center justify-center flex flex-col"
                    href="https://pratap.live"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaSignInAlt size={24} />
                    <p>Sign in</p>
            </a>
        </div>
        </footer >
    )
}

export default Footer;