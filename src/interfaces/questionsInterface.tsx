export interface MultiChoiceQuestion {
    type: 'Multi Choice'
    question: string
    choices: string[]
    maxChoice: number
    other: boolean
}

export interface NormalQuestion {
    type: string
    question: string
}

export interface YesOrNoQuestion {
    type: 'Yes or No'
    question: string
    diquilifyIfNo: boolean
}

export interface DropdownQuestion {
    type: 'Dropdown'
    question: string
    choices: string[]
    other: boolean
}

export interface VideoQuestion {
    type: 'Video'
    question: string
    description:string
    length: {
        value: number,
        type: 'Minutes' | 'Seconds' | ''
    }

}

export type Question = YesOrNoQuestion |
    NormalQuestion |
    MultiChoiceQuestion |
    DropdownQuestion |
    VideoQuestion