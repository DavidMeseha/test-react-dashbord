import type { FC } from 'react';
import { Delete } from './Icons';

interface AddQuestionButtonProps {
    deleteFn: () => void
}

const DeleteQuestionButton: FC<AddQuestionButtonProps> = ({ deleteFn }) => {
    return (
        <div onClick={deleteFn} className='flex items-center gap-2 font-bold cursor-pointer text-[#A80000]'>
            <span>
                <Delete />
            </span>
            <span>Delete Question</span>
        </div>
    );
}
export default DeleteQuestionButton;