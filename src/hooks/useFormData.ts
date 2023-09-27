import { useContext } from 'react';
import { FormContext } from '../Context/FormContext';

const useFormData = () => {
    return useContext(FormContext);
}
export default useFormData;