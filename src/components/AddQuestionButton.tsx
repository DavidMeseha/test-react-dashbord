import type { FC } from 'react';
import { Add } from './Icons';

interface AddQuestionButtonProps {
    addFn: () => void
}

const AddQuestionButton: FC<AddQuestionButtonProps> = ({ addFn }) => {
    return (
        <div onClick={addFn} className='flex items-center gap-4 font-bold mt-6 cursor-pointer'>
            <span>
                <Add />
            </span>
            <span>Add Question</span>
        </div>
    );
}
export default AddQuestionButton;