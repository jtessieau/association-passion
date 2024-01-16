export default function MemberFormValidator(formData: FormData): ValidationResult {
    // Validation rules :
    // - member name is required, max 30 characters
    // - member role is required, max 30 characters
    // - member isActive is 'true' or 'false'

    const errors: MembersFormErrorsType = {}

    // -- memberName validation -- //
    const memberName = formData.get("memberName")

    if (!memberName) {
        errors["memberName"] = "Ce champs est requis."
    } else if (memberName.toString().trim().length > 30) {
        errors["memberName"] = "Ce champs est limité a 30 caractères."
    }

    // -- memberRole validation -- //
    const memberRole = formData.get("memberRole")

    if (!memberRole) {
        errors["memberRole"] = "Ce champs est requis."
    } else if (memberRole.toString().trim().length > 30) {
        errors["memberRole"] = "Ce champs est limité a 30 caractères."
    }

    // -- memberIsActive validation --//
    const memberIsActive = formData.get("memberIsActive")

    if (!memberIsActive || (memberIsActive !== "true" && memberIsActive !== "false")) {
        errors["memberIsActive"] = "Une erreur anormal c'est produite."
    }

    // -- conclusion -- //

    if (Object.keys(errors).length > 0) {
        return ({
            isValid: false,
            errors: errors
        })
    } else {
        return ({
            isValid: true
        })
    }
}