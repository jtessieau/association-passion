"use client"

import {FormEvent, useState} from "react";
import MemberFormValidator from "@/app/utils/validators/MemberFormValidator";

const API_ENDPOINT = process.env.BASE_URL + "/api/members"
export default function MemberForm() {
    const [errors, setErrors] = useState<MembersFormErrorsType | undefined>()

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        if (!formData.get("memberIsActive")) {
            formData.append("memberIsActive", "false")
        } else {
            formData.set("memberIsActive", "true")
        }

        // -- Validation -- //

        const validation = MemberFormValidator(formData);

        if (!validation.isValid) {
            setErrors(validation.errors)
        } else {
            setErrors(undefined)
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                body: formData
            })

            console.log(await response.json())
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor={"memberName"}>Nom</label>
                    <input type={"text"} id={"memberName"} name={"memberName"}/>
                    {errors?.memberName && <span>{errors.memberName}</span>}
                </div>
                <div>
                    <label htmlFor={"memberRole"}>Role</label>
                    <input type={"text"} id={"memberRole"} name={"memberRole"}/>
                    {errors?.memberRole && <span>{errors.memberRole}</span>}
                </div>
                <div>
                    <label htmlFor={"memberIsActive"}>En activité;</label>
                    <input type={"checkbox"} id={"memberIsActive"} name={"memberIsActive"}/>
                    {errors?.memberIsActive && <span>{errors.memberIsActive}</span>}
                </div>

                <button type={"submit"}>Valider</button>
            </form>
        </>
    )
}