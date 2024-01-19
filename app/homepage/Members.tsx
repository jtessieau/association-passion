import MemberCard from "@/app/homepage/MemberCard";
import "@/app/homepage/Members.scss"

import {fetchMembers} from "@/app/utils/database/members";


export default async function Members() {

    const {data: members}: { data: MemberFromDatabase[] } = await fetchMembers()


    return (
        <section id={"members"}>
            <h2>Les membres de l&apos;équipe</h2>
            <div className={"member-list"}>
                {members.map((member) => {
                    return member.isActive && <MemberCard key={member.id} member={member}/>
                })}
            </div>
        </section>
    )
}