import { Question } from "./questionsInterface"

export type Questions = Question[]

export interface Options {
    isShow?: boolean
    isMandatory?: boolean,
    isInternal?: boolean
}

export interface Profile {
    defaults: {
        name: string
        isMandatory: boolean
        isShow: boolean
    }[];

    questions: Questions;
}

export interface PersonalInfo {
    defaults: {
        name: string
        isOptional: boolean
        isInternal: boolean
        isShow: boolean
        hint?: string
    }[];

    questions: Questions;
}


export const newProfile: Profile = {
    defaults: [
        {
            name: 'Education',
            isShow: false,
            isMandatory: false
        },
        {
            name: 'Experience',
            isShow: false,
            isMandatory: false
        },
        {
            name: 'Resume',
            isShow: false,
            isMandatory: false
        }
    ],
    questions: []
}

export const newPersonalInfo = {
    defaults: [
        {
            name: 'First Name',
            isOptional: false,
            isInternal: false,
            isShow: false,
        },
        {
            name: 'Last Name',
            isOptional: false,
            isInternal: false,
            isShow: false,
        },
        {
            name: 'Email',
            isOptional: false,
            isInternal: false,
            isShow: false,
        },
        {
            name: 'Phone',
            isOptional: true,
            isInternal: false,
            isShow: false,
            hint: 'Without Dial Code'
        },
        {
            name: 'Nationality',
            isOptional: true,
            isInternal: false,
            isShow: false,
        },
        {
            name: 'Current Residence',
            isOptional: true,
            isInternal: false,
            isShow: false,
        },
        {
            name: 'ID Number',
            isOptional: true,
            isInternal: false,
            isShow: false,
        },
        {
            name: 'Date Of Birth',
            isOptional: true,
            isInternal: false,
            isShow: false,
        },
        {
            name: 'Gender',
            isOptional: true,
            isInternal: false,
            isShow: false,
        }
    ],

    questions: [
        {
            type: 'Multi Choice',
            question: 'dasfaskjfn;asklfm;asfnajsfnasjnfasjkf?',
            choices: ['asdasf', 'asfasfasf'],
            maxChoice: 2,
            other: false,
        }
    ]
}