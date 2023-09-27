import { useState, type FC, useRef, RefObject } from 'react';
import useClickManager from '../hooks/useClickManager';

interface DropdownProps {
    placeholder: string
    options: string[]
    selected: string
    setSelected: (option: string) => void
}

const Dropdown: FC<DropdownProps> = ({ options, selected, setSelected, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useClickManager(() => setIsOpen(false), containerRef)
    return (
        <div ref={containerRef} className="relative">
            <div onClick={() => { setIsOpen(!isOpen) }} className="relative p-2 outline outline-1 rounded-md cursor-pointer select-none">{selected || placeholder} <span className="border-[6px] border-[transparent] border-t-black absolute top-4 right-4"></span></div>
            {isOpen && <div className="absolute top-12 w-full bg-white shadow-lg z-20">
                {options.map(option => {
                    return (
                        <div onClick={() => { setSelected(option); setIsOpen(false) }} className='cursor-pointer px-4 py-2 hover:bg-gray'>{option}</div>
                    )
                })}
            </div>}
        </div>
    );
}
export default Dropdown;