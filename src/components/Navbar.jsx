import CustomLink from "./CustomLink";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { SiAskubuntu, SiGnome } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import DropDownLink from "./DropDownLink";

const navigation = [
    { routeName: "TAB1", routeTo: "/" },
    { routeName: "TAB2", routeTo: "/tab2" },
    { routeName: "TAB3", routeTo: "/tab3" },
    { routeName: "TAB4", routeTo: "/tab4" },
    { routeName: "TAB5", routeTo: "/tab5" },
];

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <header className="bg-color-4 sticky top-0 w-full z-50">
            <nav className="h-16 w-full lg:max-w-6xl lg:mx-auto flex items-center p-2 desktop:max-w-5xl mx-auto">
                <div className="hidden tablet:flex tablet:basis-1/3 desktop:basis-2/12 desktop:justify-start h-full justify-center items-center">
                    <img
                        className="h-6 w-auto"
                        src="images/logo.svg"
                        alt="PRATAP PANABAKA"
                    />
                </div>
                <div className="flex -order-1 basis-1/2 tablet:basis-1/3 desktop:hidden text-white">
                    <GiHamburgerMenu className="hover:bg-lite hover:text-toodark p-2 cursor-pointer" fontSize={48} onClick={() => setShow(!show)} />
                </div>
                <div className="hidden desktop:flex gap-2 lg:gap-8 basis-8/12 h-full items-center justify-center">
                    {
                        navigation.map(item => (
                            <CustomLink
                                key={item.routeName}
                                routeTo={item.routeTo}
                                routeName={item.routeName}
                            />
                        ))
                    }
                </div>
                <div className="basis-1/2 tablet:basis-1/3 flex h-full desktop:basis-2/12 justify-end w-full items-center text-2xl text-white">
                    <a
                        href="mailto:pratap@fastmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Email to PRATAP"
                        className="p-1 text-lite hover:scale-125"
                    >
                        <AiOutlineMail fontSize={24}/>
                    </a>
                    <a
                        href="https://github.com/PRATAP-KUMAR"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Github"
                        className="p-1 text-lite hover:scale-125"
                    >
                        <AiFillGithub fontSize={24}/>
                    </a>
                    <a
                        href="https://linkedin.com/in/pratap-kumar-panabaka"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-1 text-lite hover:scale-125"
                    >
                        <AiFillLinkedin fontSize={24}/>
                    </a>
                    <a
                        href="https://askubuntu.com/users/739431/pratap"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-1 text-lite hover:scale-125"
                    >
                        <SiAskubuntu fontSize={24}/>
                    </a>
                    <a
                        href="https://extensions.gnome.org/accounts/profile/PRATAP"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-1 text-lite hover:scale-125"
                    >
                        <SiGnome fontSize={24}/>
                    </a>
                </div>
            </nav >
            {
                show &&
                <div className="flex flex-col p-2 border-t border-toolite desktop:hidden">
                    {
                        navigation.map(item => (
                            <DropDownLink
                                key={item.routeName}
                                routeTo={item.routeTo}
                                routeName={item.routeName}
                                onClick={() => setShow(false)}
                            />
                        ))
                    }
                </div>
            }
        </header >
    )
}

export default Navbar;