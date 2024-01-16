import Image from "next/image";
import "./MemberCard.scss"

export default function MemberCard({member}: { member: Member }) {
    return (
        <div className={"member-card"}>
            <div className={"member-picture"}>
                <Image src={member.picture ? member.picture : "/assets/members/default.jpg"}
                       alt={"Photo de " + member.name} sizes={"100%"} width={300} height={300}/>
            </div>
            <div className={"member-name"}>{member.name}</div>
            <div className={"member-role"}>{member.role}</div>
        </div>
    )
}