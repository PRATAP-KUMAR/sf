import { VscGlobe } from "react-icons/vsc";
import PersonalizeButton from "./PersonalizeButton";

const Header = () => {

    return (
        <header>
            <div className="flex justify-between items-center h-16 border-b border-[#ececec] max-w-3xl mx-auto">
                <div className="flex gap-2 items-center justify-center">
                    <VscGlobe size={32} />
                    <h1 className="text-2xl">Discover</h1>
                </div>
                <div className="desktop:hidden">
                    <PersonalizeButton />
                </div>
            </div>
        </header>
    )
}

export default Header;