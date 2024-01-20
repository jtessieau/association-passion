'use client'

import {deleteMemberById, fetchAllMembers} from "@/app/utils/database/membersApiCall";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function MembersList() {

    const [members, setMembers] = useState<MemberFromDatabase[]>([])

    async function fetchAndSetData() {
        try {
            const response = await fetchAllMembers();
            setMembers(response.data);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    useEffect(() => {
        fetchAndSetData()

        return () => {
        };

    }, []);

    async function handleDelete(member: MemberFromDatabase) {
        const deleted = await deleteMemberById(member.id)

        if (deleted) {
            setMembers((prevMembers) => prevMembers.filter((m) => m.id !== member.id))
        }
    }

    return (
        <table>
            <tbody>
            {members.map(member => {
                    return (
                        <tr key={member.id}>
                            <td>{member.name}</td>
                            <td>{member.role}</td>
                            <td>{member.picture}</td>
                            <td>{member.isActive}</td>
                            <td>
                                <Link href={process.env.BASE_URL + "/dashboard/members/" + member.id + "/edit"}>edit</Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(member)}>delete</button>
                            </td>
                        </tr>
                    )
                }
            )}
            </tbody>
        </table>
    )
}