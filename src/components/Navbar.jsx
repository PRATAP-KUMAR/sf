import { useState } from "react";

const Navbar = () => {

    const [selected, setSelected] = useState('top');

    const handleFilter = (e) => {
        setSelected(e.target.id);
    }

    return (
        <div className="text-nowrap sticky top-0 z-50 bg-white text-sm flex gap-2 p-2 pb-0 items-center h-16 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            <button
                id="top"
                className={`${selected === 'top' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20`}
                onClick={handleFilter}
            >Top</button>
            <button
                id="ts"
                className={`${selected === 'ts' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20`}
                onClick={handleFilter}
            >Tech & Science</button>
            <button
                id="fin"
                className={`${selected === 'fin' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20`}
                onClick={handleFilter}
            >Finance</button>
            <button
                id='ac'
                className={`${selected === 'ac' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20`}
                onClick={handleFilter}
            >Arts & Cultrure </button>
            <button
                id="sports"
                className={`${selected === 'sports' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20`}
                onClick={handleFilter}
            >Sports</button>
            <button
                id="ett"
                className={`${selected === 'ett' ? 'bg-green-500/20' : null} px-4 py-2 rounded-lg hover:text-black/20`}
                onClick={handleFilter}
            >Entertainment</button>
        </div>
    )
}

export default Navbar;