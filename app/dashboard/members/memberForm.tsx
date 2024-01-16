"use client"

import {FormEvent} from "react";

const API_ENDPOINT = process.env.BASE_URL + "/api/members"
export default function MemberForm() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            body: formData
        })

        console.log(await response.json())
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor={"member-name"}>Nom</label>
            <input type={"text"} id={"member-name"} name={"member-name"}/>

            <label htmlFor={"member-role"}>Role</label>
            <input type={"text"} id={"member-role"} name={"member-role"}/>

            <label htmlFor={"member-isActive"}>En activité;</label>
            <input type={"checkbox"} id={"member-isActive"} name={"member-isActive"}/>

            {/*<label htmlFor={"member-picture"}>Photo de profil</label>*/}
            {/*<input type={"file"} id={"member-picture"} name={"member-picture"}/>*/}

            <button type={"submit"}>Valider</button>
        </form>
    )
}