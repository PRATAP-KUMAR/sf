import { VscGlobe } from "react-icons/vsc";
import { VscSettings } from "react-icons/vsc";

const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center p-2 h-16 border-b border-[#ececec]">
                <div className="flex gap-2 items-center justify-center">
                    <VscGlobe size={32} />
                    <h1 className="text-2xl">Discover</h1>
                </div>
                <VscSettings size={32} className="bg-gray-200 rounded-full p-1" />
            </div>
        </header>
    )
}

export default Header;