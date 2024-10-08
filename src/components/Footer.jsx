import { LiaSearchPlusSolid } from "react-icons/lia";
import { VscGlobe } from "react-icons/vsc";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="desktop:hidden">
            <div className="bg-[#d7d7d7] fixed bottom-0 left-0 z-50 h-16 items-center flex justify-around border w-full">
                <Link className="items-center justify-center flex flex-col"
                    to={"/"}
                >
                    <LiaSearchPlusSolid size={24} />
                    <p>Home</p>
                </Link>
                <Link className="items-center justify-center flex flex-col"
                    to={"/discover"}
                >
                    <VscGlobe size={24} />
                    <p>Discover</p>
                </Link>
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