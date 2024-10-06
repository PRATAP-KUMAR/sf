import { FaUser } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { Tooltip } from 'react-tooltip';

const Card = ({ card }) => {
    const RANDOM = Math.floor(Math.random() * (50, 20) + 20);
    return (
        <div className="bg-[#d3d3d3]/20 border flex flex-col gap-2 hover:-translate-y-0.5">
            <img src={`${card.img}/${RANDOM}/200/300`} alt="Image" className="border w-full object-fit h-[500px]" />
            <div className="p-5">
                <h2 className="font-bold text-2xl">{card.heading}</h2>
                <p className="line-clamp-2 text-[#a9a9a9] font-bold">{card.description}</p>
                <div className="mt-5 flex justify-between">
                    <div className="flex gap-2 items-center">
                        <FaUser color="gray" className="bg-green-200 rounded-full p-1" size={32} />
                        <p className="text-xs">{card.user}</p>
                    </div>
                    <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Save to Bookmarks"
                        data-tooltip-place="top"
                    >
                        <CiBookmark size={24} />
                        <Tooltip id="my-tooltip" />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Card;