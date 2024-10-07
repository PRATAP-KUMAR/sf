import { VscSettings } from "react-icons/vsc";
import { Tooltip } from 'react-tooltip';

const PersonalizeButton = () => {

    const onClick = () => {
        console.log('clicked');
    }

    return (
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
    )
}

export default PersonalizeButton;