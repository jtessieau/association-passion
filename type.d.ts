type MemberFromDatabase = {
    id: number,
    name: string,
    role: string,
    picture: string,
    isActive: boolean
}

type Member = {
    name: string,
    role: string,
    picture: string,
    isActive: boolean
}

type MembersFormErrorsType = {
    memberName?: string,
    memberRole?: string,
    memberIsActive?: string
}

type ValidationResult = {
    isValid: boolean,
    errors?: MembersFormErrorsType
}