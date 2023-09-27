import type { FC } from 'react';

interface InputProps {
    type: string
    onChange: (e: any) => void
    value: string | number
    placeholder: string
}

const Input: FC<InputProps> = ({ type, placeholder, onChange, value }) => {
    return (
        <input className="outline-1 outline p-2 w-full rounded-md"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
}
export default Input;