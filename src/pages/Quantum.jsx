import { FaUser } from "react-icons/fa";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { FaToggleOff } from "react-icons/fa6";
import { FaCodeFork } from "react-icons/fa6";
import { useState } from "react";

const Quantum = () => {

    const [content, setContenet] = useState(null);

    const onChange = (e) => {
        if (e.target.value) {
            setContenet(true);
        } else {
            setContenet(null);
        }
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="max-w-3xl desktop:max-w-6xl mx-auto p-2 pb-[75px] flex flex-col gap-2">
                <img src="https://picsum.photos/id/124/1024/768" alt="quantum image" className="object-cover aspect-[1036/350] rounded-t-xl hover:scale-[1.01]" />
                <div className="flex">
                    <div className="desktop:basis-3/5 flex flex-col gap-5">
                        <div>
                            <h1 className="text-3xl text-left">Quantum Computer Doom Challenge</h1>
                            <div className="mt-5 flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <FaUser color="gray" className="bg-green-200 rounded-full p-1" size={20} />
                                    <p className="text-xs">username</p>
                                </div>
                                <div className="flex gap-2">
                                    <p>7d</p>
                                    <p>45648</p>
                                    <p>2, 252</p>
                                </div>
                            </div>
                            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-2 first-letter:mt-1 first-letter:float-left">
                                According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement for 72,376 qubits and 80 million quantum gates, far exceeding the capabilities of today's most advanced quantum computers.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="text-2xl">Quandoom Technical Challenges</p>
                                <div>
                                    <img src="https://picsum.photos/id/123/1024/768" alt="image" className="rounded-2xl float-right object-cover w-[50%] aspect-[4/3] p-2 hover:scale-[1.05]" />
                                    <p>Quandoom, the quantum computer port of DOOM, presents significant technical challenges that push the boundaries of current quantum computing capabilities. The project requires a staggering 72,376 qubits and 80 million quantum gates to run, far exceeding the capabilities of even the most advanced quantum computers available today12. For comparison, the current record holder for the most powerful quantum computer, developed by Atom Computing, boasts only 1,225 qubits3. This massive disparity highlights the ambitious nature of Quandoom and underscores the substantial advancements needed in quantum computing hardware before such complex applications can be natively executed.</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-2xl">Simulation on Classical Computers</p>
                                <p>
                                    Despite the lack of suitable quantum hardware, enthusiasts can experience Quandoom through a lightweight QASM simulator designed to run on classical computers. This simulator, consisting of just 150 lines of C++ code, allows the game to achieve 10-20 frames per second on a standard laptop12. To play Quandoom, users can download the files from GitHub and drag the QASM file onto the simulator executable. However, the simulation requires a substantial 5-6 GB of RAM to load, reflecting the complexity of the quantum circuit being emulated32. This classical simulation approach provides a glimpse into the potential of quantum gaming while highlighting the significant computational demands of translating quantum algorithms to traditional hardware.
                                </p>
                            </div>
                        </div>
                        <div className="sticky bottom-16 z-10 bg-white rounded-full p-2 relative w-full border-2 border-green-200 flex items-center">
                            <textarea
                                onChange={onChange}
                                placeholder="Ask follow-up"
                                className="w-[90%] pr-[60px] resize-y border-none items-center ring-none outline-none items-center justify-center"
                            />
                            <div className="absolute right-4 bottom-4 flex gap-2 items-center">
                                <button className="inline-flex items-center gap-2"><FaToggleOff size={36} /><span>Pro</span></button>
                                <button disabled={content ? false : true} className={`${content ? "bg-green-500 rounded-3xl p-2" : null}`}><FaCodeFork size={18} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden desktop:flex flex-col pl-5 gap-4 desktop:basis-2/5">
                        <a className="items-center justify-start flex gap-2"
                            href="https://pratap.live"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Introduction
                        </a>
                        <a className="items-center justify-start flex gap-2"
                            href="https://pratap.live"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Quandoom Technical Challenges
                        </a><a className="items-center justify-start flex gap-2"
                            href="https://pratap.live"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Simulation on Classical Computers
                        </a>
                    </div>
                </div>
                <Footer />
            </div >
        </div>
    )
}

export default Quantum;