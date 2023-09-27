import type { FC } from 'react';
import Switch from './Switch';
import Checkbox from './Checkbox';

interface Obj {
    isShow?: boolean
    isInternal?: boolean
    isMandatory?: boolean
}

interface InputProps {
    info: any
    checkboxTitle?: string
    optionsChange: (data: Obj) => void
}

const InputType: FC<InputProps> = ({ checkboxTitle, info, optionsChange }) => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <label className="block font-bold">{info.name} {info.hint && <span className='text-xs font-normal'>({info.hint})</span>}</label>
                {info.isOptional && <div className='flex gap-10 items-center'>
                    <div>
                        <Checkbox
                            boxFor={info.name}
                            title={checkboxTitle || ''}
                            onChange={(event) => { optionsChange(checkboxTitle === 'Internal' ? { isInternal: event.target.checked } : { isMandatory: event.target.checked }) }}
                            state={info.isInternal || info.isMandatory} />
                    </div>
                    <div><Switch switchFor={info.name} onChange={(event) => { optionsChange({ isShow: event.target.checked }) }} state={info.isShow} /></div>
                </div>}
            </div>
            <div className='h-[1px] mt-4 bg-gray'></div>
        </>
    );
}
export default InputType;