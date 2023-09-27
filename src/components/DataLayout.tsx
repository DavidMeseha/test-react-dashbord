import type { FC, ReactNode } from 'react';

interface DataLayoutProps {
    children: ReactNode;
    title: string;
}

const DataLayout: FC<DataLayoutProps> = ({ children, title }) => {
    return (
        <div className='rounded-md shadow-md w-[400px] mb-4'>
            <div className='font-bold bg-primary p-2 rounded-t-lg'>{title}</div>
            <div className='p-4 [&>*]:mt-6 pb-8'>
                {children}
            </div>
        </div>
    );
}
export default DataLayout;