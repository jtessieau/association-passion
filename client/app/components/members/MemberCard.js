import Image from "next/image";

export default function MemberCard({ member }) {
  return (
    <div className="member-card">
      <Image className="member-card-picture" src={member.photo} alt={member.name + " portrait"} sizes="100vw" width={300} height={300} />
      <div className="member-card-body">
        <div className="member-card-title">
          {member.name}
        </div>
        <div className="member-card-subtitle">
          {member.role}
        </div>
      </div>
    </div>
  )
}