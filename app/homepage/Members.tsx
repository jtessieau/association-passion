import MemberCard from "@/app/homepage/MemberCard";
import "./Members.scss"

async function fetchMembers() {
    const response = await fetch(process.env.URL + "/api/members", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (response.status === 200) {
        return response.json()
    }

    return null
}

export default async function Members() {

    const {data: members}: { data: Member[] } = await fetchMembers()


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