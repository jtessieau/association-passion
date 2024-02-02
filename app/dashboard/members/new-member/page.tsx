"use client"

import MemberForm from "@/app/dashboard/members/_components/MemberForm";
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function MemberFormContainer() {
    const [errors, setErrors] = useState<MembersFormErrorsType>()

    const router = useRouter()
    const API_ENDPOINT = process.env.BASE_URL + "/api/members"

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        formData.set("memberIsActive", formData.get("memberIsActive") ? "true" : "false")

        async function handleApiResponse(response: Response) {
            if (!response.ok) {
                const parsedResponse = await response.json()
                setErrors(parsedResponse.details)
            } else {
                router.push("/dashboard/members")
            }
        }

        try {
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                body: formData,
            })

            await handleApiResponse(response)

        } catch (error) {
            console.error("An error occurred:", error)
        }
    }

    return (
        <div className={"memberFormContainer"}>
            <MemberForm onSubmit={onSubmit} {...(errors && {errors})}/>
        </div>
    )
}