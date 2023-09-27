import useFormData from '../hooks/useFormData';
import { useState, type FC, useEffect } from 'react';
import Dropdown from './Dropdown';
import { ChoiceQuestion, DropdownQuestion, NormalQuestion, VideoQuestion, YesOrNoQuestion } from './QuestionsTemplate';
import DeleteQuestionButton from './DeleteQuestionButton';
import {
    DropdownQuestion as DropdownQuestionType,
    MultiChoiceQuestion,
    Question,
    VideoQuestion as VideoQuestionType,
    YesOrNoQuestion as YesOrNoQuestionType
} from '../interfaces/questionsInterface';
import { Edit } from './Icons';

//
interface QuestionProps {
    question: Question
    index: number
    section: string
}

const QuestionDisplay: FC<QuestionProps> = ({ question, index, section }) => {
    const { deleteQuestion, updateQuestion } = useFormData()
    const options = ['Multi Choice', 'Yes or No', 'Video', 'Paragraph', 'Dropdown', 'Short Answer', 'Date', 'Number', 'File Upload']
    const [editableQuestion, setEditableQuestion] = useState<Question>(question)
    let questionState: 'display' | 'edit' = question.question.length < 1 && question.question.length < 1 ? 'edit' : 'display'
    const [state, setState] = useState<'display' | 'edit'>(questionState)

    useEffect(() => { setEditableQuestion(question) }, [question])

    const changeType = (type: string) => {
        let question = { ...editableQuestion }
        question.type = type
        setEditableQuestion(question)
    }

    const saveHandle = () => {
        updateQuestion(index, section, editableQuestion)
        setState('display')
    }

    if (state === 'edit')
        return (
            <>
                <div>
                    <div className='mb-4'>
                        <div className='font-bold pb-2'>Type</div>
                        <Dropdown options={options} placeholder='Select Question Type' selected={editableQuestion.type || 'Select question type'} setSelected={changeType} />
                    </div>

                    {editableQuestion.type === 'Multi Choice'
                        && <ChoiceQuestion question={editableQuestion as MultiChoiceQuestion} setQuestion={setEditableQuestion} />
                    }

                    {editableQuestion.type === 'Dropdown'
                        && <DropdownQuestion question={editableQuestion as DropdownQuestionType} setQuestion={setEditableQuestion} />
                    }

                    {editableQuestion.type === 'Paragraph' || editableQuestion.type === 'Short Answer' || editableQuestion.type === 'Date' || editableQuestion.type === 'Number'
                        && <NormalQuestion question={editableQuestion} setQuestion={setEditableQuestion} />
                    }

                    {editableQuestion.type === 'Yes or No'
                        && <YesOrNoQuestion question={editableQuestion as YesOrNoQuestionType} setQuestion={setEditableQuestion} />
                    }

                    {editableQuestion.type === 'Video'
                        && <VideoQuestion question={editableQuestion as VideoQuestionType} setQuestion={setEditableQuestion} />
                    }

                    <div className='flex justify-between items-center w-full mt-4'>
                        <DeleteQuestionButton deleteFn={() => deleteQuestion(index, section)} />
                        <button onClick={saveHandle} className='p-2 bg-green text-white rounded-md'>Save</button>
                    </div>
                </div>
                <div className='h-[1px] bg-gray'></div>
            </>
        );



    return (
        <>
            <div className='flex gap-2 items-center justify-between w-full'>
                <div>
                    <div className='text-xs text-gray'>{question.type}</div>
                    <div className='font-bold'>{editableQuestion.question}</div>
                </div>
                <div className='w-4 h-4 cursor-pointer' onClick={() => setState('edit')}><Edit /></div>
            </div>
            <div className='h-[1px] bg-gray'></div>
        </>
    )

}
export default QuestionDisplay;