import { useState, type FC, useEffect } from 'react';
import Checkbox from './Checkbox';
import { Add } from './Icons';
import Input from './Input';
import { DropdownQuestion as DropdownQuestionType, MultiChoiceQuestion, NormalQuestion as NormalQuestionType, Question, VideoQuestion as VideoQuestionType, YesOrNoQuestion as YesOrNoQuestionType } from '../interfaces/questionsInterface';
import Dropdown from './Dropdown';

export const ChoiceQuestion: FC<{ question: MultiChoiceQuestion, setQuestion: (q: MultiChoiceQuestion) => void }> = ({ question, setQuestion }) => {
    const [choice, setChoice] = useState('')

    const addChoice = () => {
        if (choice.length < 1) return
        console.log(question.choices)
        let choices = (!question.choices || question.choices.length < 1) ? [] : [...question.choices]
        choices.push(choice)
        setQuestion({ ...question, choices: choices })
    }

    return (
        <div className='space-y-6'>
            <div>
                <div className='mb-2 font-bold'>Question</div>
                <Input type='text' placeholder='Type Question' onChange={(event) => setQuestion({ ...question, question: event.target.value })} value={question.question} />
            </div>
            <div>
                <div className='mb-2 pl-6 font-bold'>Choice</div>
                <div className='flex gap-4 w-full items-center'>
                    <div>X</div>
                    <div className='grow'>
                        <Input type='text' placeholder='Add Choice' onChange={(event) => setChoice(event.target.value)} value={choice} />
                    </div>
                    <div onClick={addChoice}><Add /></div>
                </div>
                <div className='mt-4'>
                    {question.choices?.map((choice) => {
                        return (
                            <div>{choice}</div>
                        )
                    })}
                </div>
                <div className='pl-2 pt-4'><Checkbox boxFor={question.question} title='Enable “Other” option' onChange={(event) => setQuestion({ ...question, other: event.target.checked })} state={question.other} /></div>
            </div>
            <div>
                <div className='mb-2 font-bold'>Max Choice Allowed</div>
                <Input type='number' placeholder='Enter Number of Choice' onChange={(event) => setQuestion({ ...question, maxChoice: event.target.value })} value={question.maxChoice} />
            </div>
        </div>
    );
}

export const DropdownQuestion: FC<{ question: DropdownQuestionType, setQuestion: (q: DropdownQuestionType) => void }> = ({ question, setQuestion }) => {
    const [choice, setChoice] = useState('')

    const addChoice = () => {
        if (choice.length < 1) return
        console.log(question.choices)
        let choices = (!question.choices || question.choices.length < 1) ? [] : [...question.choices]
        choices.push(choice)
        setQuestion({ ...question, choices: choices })
    }

    return (
        <div className='space-y-6'>
            <div>
                <div className='mb-2 font-bold'>Question</div>
                <Input type='text' placeholder='Type Question' onChange={(event) => setQuestion({ ...question, question: event.target.value })} value={question.question} />
            </div>
            <div>
                <div className='mb-2 pl-6 font-bold'>Choice</div>
                <div className='flex gap-4 w-full items-center'>
                    <div>X</div>
                    <div className='grow'>
                        <Input type='text' placeholder='Add Choice' onChange={(event) => setChoice(event.target.value)} value={choice} />
                    </div>
                    <div onClick={addChoice}><Add /></div>
                </div>
                <div className='mt-4'>
                    {question.choices?.map((choice) => {
                        return (
                            <div>{choice}</div>
                        )
                    })}
                </div>
                <div className='pl-2 pt-4'><Checkbox boxFor={question.question} title='Enable “Other” option' onChange={(event) => setQuestion({ ...question, other: event.target.checked })} state={question.other} /></div>
            </div>
        </div>
    )
}

export const VideoQuestion: FC<{ question: VideoQuestionType, setQuestion: (q: VideoQuestionType) => void }> = ({ question, setQuestion }) => {
    const changeType = (type: string) => {
        let q = { ...question }
        q.length.type = type as 'Minutes' | 'Seconds'
        setQuestion(q)
    }

    /*useEffect(() => {
        setQuestion({ ...question, length: { value: 0, type: '' } })
    }, [])*/

    return (
        <div>
            <div className='mb-2 font-bold'>Question</div>
            <Input type='text' placeholder='Enter Number of Choice' onChange={(event) => setQuestion({ ...question, question: event.target.value })} value={question.question} />
            <textarea rows={4} className='outline-1 outline p-2 w-full rounded-md my-4' placeholder='About The video?' onChange={(event) => setQuestion({ ...question, description: event.target.value })} value={question.description}></textarea>
            <div className='flex items-center gap-4 w-full'>
                <div><Input
                    type='number'
                    placeholder='Max Video Duration'
                    value={question.length?.value || ''}
                    onChange={(event) => setQuestion({ ...question, length: { ...question.length, value: event.target.value } })}
                /></div>
                <div className='w-40'><Dropdown options={['Minutes', 'Seconds']} placeholder={'min/sec'} selected={question.length?.type} setSelected={changeType} /></div>
            </div>
        </div>
    )
}

export const NormalQuestion: FC<{ question: NormalQuestionType, setQuestion: (q: NormalQuestionType) => void }> = ({ question, setQuestion }) => {
    return (
        <div>
            <div className='mb-2 font-bold'>Question</div>
            <Input type='text' placeholder='Enter Number of Choice' onChange={(event) => setQuestion({...question, question:event.target.value})} value={question.question} />
        </div>
    )
}

export const YesOrNoQuestion: FC<{ question: YesOrNoQuestionType, setQuestion: (q: YesOrNoQuestionType) => void }> = ({ question, setQuestion }) => {
    return (
        <div>
            <div className='mb-2 font-bold'>Question</div>
            <Input type='text' placeholder='Enter Number of Choice' onChange={(event) => setQuestion({ ...question, question: event.target.value })} value={question.question} />
            <div className='px-2 py-4'><Checkbox boxFor={question.question} title='Disqualify candidate if the answer is no' onChange={(event) => { }} state={false} /></div>
        </div>
    )
}