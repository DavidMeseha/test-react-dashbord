import type { FC } from 'react';

interface FormNavProps { }

const FormNav: FC<FormNavProps> = ({ }) => {
    const selected = "after:absolute after:border-green after:border-[11px] after:border-r-[transparent] after:border-t-[transparent] after:border-b-[transparent] after:w-0 after:h-0 after:-right-5 bg-green text-white"

    return (
        <div className='flex [&>*]:px-6 [&>*]:py-6 [&>*]:min-w-max text-sm'>
            <a href='#'>Program Details</a>
            <a href='#' className={`relative ${selected}`}>Application Form</a>
            <a href='#'>Workflow</a>
            <a href='#'>Preview</a>
        </div>
    );
}
export default FormNav;