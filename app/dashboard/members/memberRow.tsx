"use client"

import {useRouter} from "next/navigation";

export default function MemberRow({member}: { member: MemberFromDatabase }) {
    const router = useRouter()

    function handleEdit(member: MemberFromDatabase) {
        console.log("edit " + member.id)
    }

    async function handleDelete(member: MemberFromDatabase) {

        const response = await fetch(process.env.BASE_URL + "/api/members", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(member)
        })

        if (response.status === 204) {
            router.push('/dashboard')
        } else {
            console.error(response.json())
        }
    }

    return (
        <tr>
            <td>{member.name}</td>
            <td>{member.role}</td>
            <td>{member.picture}</td>
            <td>{member.isActive}</td>
            <td>
                <button onClick={() => handleEdit(member)}>edit
                </button>
            </td>
            <td>
                <button onClick={() => handleDelete(member)}>delete</button>
            </td>
        </tr>
    )
}
