import type { FC } from 'react';
import { Upload } from './Icons';

interface ImageInputProps { }

const ImageInput: FC<ImageInputProps> = ({ }) => {
    return (
        <label className="relative w-full p-8 flex flex-col items-center border-dashed border-2 text-sm cursor-pointer -z-10">
            <div><Upload /></div>
            <div>Upload Cover Image</div>
            <div className="opacity-70">16:9 ratio is recomended. Max image size 1mb</div>
            <input type="file" className="hidden absolute" />
        </label>
    );
}
export default ImageInput;