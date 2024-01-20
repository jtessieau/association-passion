import {FormEvent} from "react";

export default function MemberForm({member, errors, onSubmit}: {
    member?: MemberFromDatabase,
    errors?: MembersFormErrorsType
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
}) {


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor={"memberName"}>Nom</label>
                <input type={"text"} id={"memberName"} name={"memberName"} defaultValue={member?.name}/>
                {errors?.memberName && <span className={"formErrorSpan"}>{errors.memberName}</span>}
            </div>
            <div>
                <label htmlFor={"memberRole"}>Role</label>
                <input type={"text"} id={"memberRole"} name={"memberRole"} defaultValue={member?.role}/>
                {errors?.memberRole && <span className={"formErrorSpan"}>{errors.memberRole}</span>}
            </div>
            <div>
                <label htmlFor={"memberIsActive"}>En activité:</label>
                <input type={"checkbox"} id={"memberIsActive"} name={"memberIsActive"}
                       defaultChecked={member ? member.isActive : true}/>
                {errors?.memberIsActive && <span className={"formErrorSpan"}>{errors.memberIsActive}</span>}
            </div>

            <button type={"submit"}>Valider</button>
        </form>
    )
}