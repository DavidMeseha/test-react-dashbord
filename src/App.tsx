import DataLayout from "./components/DataLayout";
import FormNav from "./components/FormNav";
import ImageInput from "./components/ImageInput";
import InputType from "./components/InputType";
import PageNav from "./components/PageNav";
import AddQuestionButton from './components/AddQuestionButton';
import Question from './components/Question';
import useFormData from './hooks/useFormData';
import { Options } from "./interfaces/formsInterface";

function App() {
    const { profile, personalInfo, questions, addQuestion, updateDefaultsOptions } = useFormData()

    const updateOptions = (index: number, section: string, data: Options) => {
        updateDefaultsOptions(index, section, data)
    }

    return (
        <div className="flex justify-start items-start h-[100vh] overflow-hidden">
            <nav className="bg-white shadow-md h-full z-20 flex flex-col">
                <PageNav />
            </nav>
            <main className="grow pt-20 h-full overflow-auto">
                <div className='bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.3)] sticky -top-20 overflow-auto z-10'>
                    <FormNav />
                </div>
                <div className="p-6">
                    <DataLayout title="Upload Cover Image">
                        <ImageInput />
                    </DataLayout>
                    <DataLayout title="Personal Information">
                        {personalInfo.defaults.map((info, index) => {
                            return (
                                <InputType key={index} info={info} checkboxTitle='Internal' optionsChange={(data) => { updateOptions(index, 'personal', data) }} />
                            )
                        })}
                        {personalInfo.questions.map((question, index) => {
                            return <Question key={index} question={question} index={index} section='personal' />
                        })}
                        <AddQuestionButton addFn={() => addQuestion('personal')} />
                    </DataLayout>
                    <DataLayout title='Profile'>
                        {profile.defaults.map((section, index) => {
                            return (
                                <InputType key={index} checkboxTitle='Mandatory' info={section} optionsChange={(data) => { updateOptions(index, 'profile', data) }} />
                            )
                        })}
                        {profile.questions.map((question, index) => {
                            return <Question key={index} question={question} index={index} section='profile' />
                        })}
                        <AddQuestionButton addFn={() => addQuestion('profile')} />
                    </DataLayout>
                    <DataLayout title="Additional Questions">
                        {questions.map((question, index) => {
                            return <Question key={index} question={question} index={index} section='questions' />
                        })}
                        <AddQuestionButton addFn={() => addQuestion('questions')} />
                    </DataLayout>
                </div>
            </main>
        </div>
    );
}

export default App;
