import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { GiArtificialIntelligence } from "react-icons/gi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdOutlineColorLens } from "react-icons/md";
import { LiaMedalSolid } from "react-icons/lia";
import { PiMonitorBold } from "react-icons/pi";
import PersonalizeButton from "./PersonalizeButton";

const Navbar = () => {

    const [selected, setSelected] = useState('top');

    const handleFilter = (e) => {
        setSelected(e.target.id);
    }

    return (
        <div className="flex items-center justify-between gap-2 sticky top-0 bg-white z-10">
            <div className="flex-nowrap bg-white text-sm text-nowrap min-w-[10px] flex flex-shrink gap-2 items-center h-16 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                <button
                    id="top"
                    className={`${selected === 'top' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20 inline-flex gap-1 items-center`}
                    onClick={handleFilter}
                >
                    <CiStar fontSize={20} /><span className="text-xs">Top</span>
                </button>
                <button
                    id="ts"
                    className={`${selected === 'ts' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20 inline-flex gap-1 items-center`}
                    onClick={handleFilter}
                >
                    <GiArtificialIntelligence fontSize={20} /><span className="text-xs">Tech & Science</span>
                </button>
                <button
                    id="fin"
                    className={`${selected === 'fin' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20 inline-flex gap-1 items-center`}
                    onClick={handleFilter}
                >
                    <HiOutlineCurrencyDollar fontSize={20} /><span className="text-xs">Finance</span>
                </button>
                <button
                    id='ac'
                    className={`${selected === 'ac' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20 inline-flex gap-1 items-center`}
                    onClick={handleFilter}
                >
                    <MdOutlineColorLens fontSize={20} /><span className="text-xs">Arts & Culture</span>
                </button>
                <button
                    id="sports"
                    className={`${selected === 'sports' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20 inline-flex gap-1 items-center`}
                    onClick={handleFilter}
                >
                    <LiaMedalSolid fontSize={20} /><span className="text-xs">Sports</span>
                </button>
                <button
                    id="ett"
                    className={`${selected === 'ett' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20 inline-flex gap-1 items-center`}
                    onClick={handleFilter}
                >
                    <PiMonitorBold fontSize={20} /><span className="text-xs"></span>Entertainment
                </button>
            </div >
            <div className="hidden desktop:block">
                <PersonalizeButton />
            </div>
        </div>
    )
}

export default Navbar;