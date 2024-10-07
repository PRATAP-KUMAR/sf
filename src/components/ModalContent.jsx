import { useEffect } from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdOutlineColorLens } from "react-icons/md";
import { LiaMedalSolid } from "react-icons/lia";
import { PiMonitorBold } from "react-icons/pi";

const ModalContent = ({ onClose }) => {

    useEffect(() => {
        const esc = (e) => {
            if (e.keyCode === 27) {
                onClose();
            }
        };

        document.body.addEventListener('keydown', esc);

        return () => {
            document.body.removeEventListener('keydown', esc);
        }

    }, [onClose])

    return (
        <>
            <div className="fixed bottom-0 left-0 w-full h-full bg-black/40 flex text-center justify-end items-end dektop:justify-center desktop:items-center z-40"
                onClick={onClose}>
                <div className="bg-white rounded-t-xl desktop:rounded-xl w-full max-w-3xl mx-auto justify-start items-start flex gap-5 p-2 flex-col z-50"
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="flex justify-between w-full">
                        <div className="text-left w-full text-xl">Make it Yours</div>
                        <button type="button" className="z-50" onClick={onClose}>x</button>
                    </div>
                    <hr className="w-full" />
                    <p className="text-left text-lg">Select topics and interests to customize your Discover experience</p>
                    <div className="flex flex-wrap gap-2 items-center">
                        <div className="flex items-center gap-2 bg-green-200 rounded-lg p-2">
                            <GiArtificialIntelligence fontSize={24} /><span className="text-md">Tech & Science</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-200 rounded-lg p-2">
                            <HiOutlineCurrencyDollar fontSize={24} /><span className="text-md">Finance</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-200 rounded-lg p-2">
                            <MdOutlineColorLens fontSize={24} /><span className="text-md">Arts & Culture</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-200 rounded-lg p-2">
                            <LiaMedalSolid fontSize={24} /><span className="text-md">Sports</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-200 rounded-lg p-2">
                            <PiMonitorBold fontSize={24} /><span className="text-md">Entertainment</span>
                        </div>
                    </div>
                    <hr className="w-full" />
                    <button className="w-full bg-green-800 hover:bg-green-400 p-2 text-white rounded-3xl font-bold">Save Interests</button>
                </div>
            </div>
        </>
    )
}

export default ModalContent;