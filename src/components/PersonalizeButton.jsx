import { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { Tooltip } from 'react-tooltip';
import ModalContent from './ModalContent';

const PersonalizeButton = () => {

    const [showModal, setShowModal] = useState(false);

    const onClick = () => {
        setShowModal(true);
    }

    return (
        <>
            <button
                onClick={onClick}
            >
                <VscSettings size={32} className="bg-gray-200 rounded-full p-1"
                    data-tooltip-id="personalize"
                    data-tooltip-content="Personalize Discover"
                    data-tooltip-place="top"
                />
                <Tooltip id="personalize" />
            </button>
            {
                showModal && <ModalContent onClose={() => setShowModal(false)} />
            }
        </>
    )
}

export default PersonalizeButton;