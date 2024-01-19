'use client'

import {fetchMembers} from "@/app/utils/database/members";
import MemberRow from "@/app/dashboard/members/memberRow";
import {useEffect, useState} from "react";

export default function MembersTable() {

    const [members, setMembers] = useState<MemberFromDatabase[]>([])

    useEffect(() => {
        async function fetchData() {
            const {data: members}: { data: MemberFromDatabase[] } = await fetchMembers()
            setMembers(members)
        }

        fetchData()
    });

    return (
        <table>
            <tbody>
            {members.map(member =>
                <MemberRow key={member.id} member={member}/>
            )}
            </tbody>
        </table>
    )
}