import { dataMembers } from "../../data/dataMembers";
import MemberCard from "./MemberCard";

export default function MembersList() {
  const listMembers = dataMembers.map(member =>
    <MemberCard key={member.id} member={member}></MemberCard>
  )

  return (
    <section id="members">
      <h2>Les membres de l&apos;association</h2>
      <div className="members-list">
        {listMembers}
      </div>
    </section>
  )
}