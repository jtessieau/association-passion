"use client"

import {fetchMemberById} from "@/app/utils/database/membersApiCall";
import {FormEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import MemberForm from "@/app/dashboard/members/_components/MemberForm";

export default function EditMember({params}: { params: { id: string } }) {

    const [member, setMember] = useState<MemberFromDatabase>()
    const [errors, setErrors] = useState<MembersFormErrorsType>()

    const router = useRouter()

    async function fetchAndSetData() {
        try {
            const response = await fetchMemberById(params.id);

            if (response.data) {
                setMember(response.data)
            } else {
                throw new Error(response.error)
            }

        } catch (error) {
            console.error("Error fetching member:", error);
        }
    }

    useEffect(() => {
        fetchAndSetData()
    }, [params.id]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()
        console.log("edit send")

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
            const API_ENDPOINT = process.env.BASE_URL + '/api/members/' + params.id
            const response = await fetch(API_ENDPOINT, {
                method: "PATCH",
                body: formData,
            })

            await handleApiResponse(response)

        } catch (error) {
            console.error("An error occurred:", error)
        }
    }


    return (
        <div className={"memberFormContainer"}>
            <MemberForm onSubmit={handleSubmit} {...(member && {member})} {...(errors && {errors})}/>
        </div>
    )
}