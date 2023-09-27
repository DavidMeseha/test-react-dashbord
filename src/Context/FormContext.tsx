import { FC, ReactNode, createContext, useState } from "react";
import { Options, PersonalInfo, Profile, Questions, newPersonalInfo, newProfile } from "../interfaces/formsInterface";
import { Question } from "../interfaces/questionsInterface";

interface FormProviderProps {
    children: ReactNode
}

export const FormContext = createContext<{
    profile: Profile
    personalInfo: PersonalInfo
    questions: Questions
    updateQuestion: (index: number, section: string, updatedQuestion: Question) => void
    addQuestion: (section: string) => void
    deleteQuestion: (index: number, section: string) => void
    updateDefaultsOptions: (index: number, section: string, newOptions: Options) => void
}>({
    profile: { defaults: [], questions: [] },
    personalInfo: { defaults: [], questions: [] },
    questions: [],
    updateQuestion(index, sectionm, updatedQuestion) { },
    addQuestion(section) { },
    deleteQuestion(index, section) { },
    updateDefaultsOptions(index, section, newOptions) { }
})

export const FormProvider: FC<FormProviderProps> = ({ children }) => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(newPersonalInfo)
    const [profile, setProfile] = useState<Profile>(newProfile)
    const [questions, setQuestions] = useState<Questions>([])

    const newQuestion: Question = {
        type: '',
        question: ''
    }

    const addQuestion = (section: string) => {
        let targetSection

        if (section === 'questions') {
            targetSection = [...questions]
            targetSection.push(newQuestion)
            setQuestions(targetSection)
        }

        if (section === 'profile') {
            targetSection = { ...profile }
            targetSection.questions.push(newQuestion)
            setProfile(targetSection)
        }

        if (section === 'personal') {
            targetSection = { ...personalInfo }
            targetSection.questions.push(newQuestion)
            setPersonalInfo(targetSection)
        }
    }

    const updateQuestion = (index: number, section: string, updatedQuestion: Question) => {
        let targetSection

        if (section === 'questions') {
            targetSection = [...questions]
            targetSection[index] = updatedQuestion
            setQuestions([...targetSection])
            return
        }

        if (section === 'profile') {
            targetSection = { ...profile }
            targetSection.questions[index] = updatedQuestion
            setProfile({ ...targetSection })
            return
        }

        if (section === 'personal') {
            targetSection = { ...personalInfo }
            targetSection.questions[index] = updatedQuestion
            setPersonalInfo({ ...targetSection })
        }
    }

    const deleteQuestion = (index: number, section: string,) => {
        let targetSection;

        if (section === 'questions') {
            targetSection = [...questions]
            targetSection.splice(index, 1)
            setQuestions([...targetSection])
            return
        }

        if (section === 'profile') {
            targetSection = { ...profile }
            targetSection.questions.splice(index, 1)
            setProfile({ ...targetSection })
            return
        }

        if (section === 'personal') {
            targetSection = { ...personalInfo }
            targetSection.questions.splice(index, 1)
            setPersonalInfo({ ...targetSection })
        }
    }

    const updateDefaultsOptions = (index: number, section: string, newOptions: Options) => {
        let targetSection;
        console.log(newOptions)

        if (section === 'profile') {
            targetSection = { ...profile }
            let targetField = targetSection.defaults[index]
            targetSection.defaults[index] = { ...targetField, ...newOptions }
            console.log(targetSection)
            setProfile({ ...targetSection })
            return
        }

        if (section === 'personal') {
            targetSection = { ...personalInfo }
            let targetField = targetSection.defaults[index]
            targetSection.defaults[index] = { ...targetField, ...newOptions }
            console.log(targetSection)
            setPersonalInfo({ ...targetSection })
            return
        }

    }

    return (
        <FormContext.Provider value={{
            profile, personalInfo, questions,
            updateQuestion, addQuestion, deleteQuestion,
            updateDefaultsOptions
        }}>
            {children}
        </FormContext.Provider>
    );
}