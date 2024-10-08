import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { Tooltip } from 'react-tooltip';

const Card = ({ card }) => {
    const RANDOM = Math.floor(Math.random() * (120 - 100) + 10);

    return (
        <Link
            to={"/page/quantum"}
            className="bg-[#d3d3d3]/20 border rounded-xl flex flex-col flex-shrink gap-2 hover:-translate-y-0.5 desktop:[&:nth-child(4n+1)]:col-span-3 desktop:[&:nth-child(4n+1)>img]:aspect-[1036/350]"
        >
            <img src={`${card.img}/${RANDOM}/1024/768`} alt="Image" loading="lazy" className="border w-fit object-cover aspect-[4/3] rounded-t-xl" />
            <div className="p-5 rounded-b-xl">
                <h2 className="font-bold text-xl">{card.heading}</h2>
                <p className="line-clamp-2 text-[#a9a9a9] font-bold text-sm leading-6">{card.description}</p>
                <div className="mt-5 flex justify-between">
                    <div className="flex gap-2 items-center">
                        <FaUser color="gray" className="bg-green-200 rounded-full p-1" size={20} />
                        <p className="text-xs">{card.user}</p>
                    </div>
                    <button
                        data-tooltip-id="bookmark"
                        data-tooltip-content="Save to Bookmarks"
                        data-tooltip-place="top"
                    >
                        <CiBookmark size={16} />
                        <Tooltip id="bookmark" />
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default Card;