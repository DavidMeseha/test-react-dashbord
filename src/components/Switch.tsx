import { useRef, type FC, useEffect } from 'react';

interface SwitchProps {
    state: boolean
    switchFor:string
    onChange: (event: any) => void
}

const Switch: FC<SwitchProps> = ({ state, switchFor, onChange }) => {
    const switchRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (switchRef.current) switchRef.current.checked = state
    }, [state])

    return (
        <label className='switch relative'>
            <div className='pl-14 text-gray'>Hide</div>
            <input ref={switchRef} name={switchFor} type='checkbox' onChange={onChange} />
            <span className='slider'></span>
        </label>
    );
}
export default Switch;