import type { FC } from 'react';
import { Form, Home, Menu } from './Icons';

interface PageNavProps { }

const PageNav: FC<PageNavProps> = ({ }) => {
    return (
        <>
            <div className='h-20 p-4'>
                <Menu />
            </div>
            <div className='p-4 pb-0'>
                <Home />
            </div>
            <div className='p-4'>
                <Form />
            </div>
            <div className='grow flex items-center p-4'>
                <div className='rounded-full bg-blue p-2 text-white w-8 h-8 flex justify-center items-center text-sm'>NT</div>
            </div>
        </>
    );
}
export default PageNav;