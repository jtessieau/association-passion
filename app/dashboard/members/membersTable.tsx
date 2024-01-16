import {fetchMembers} from "@/app/utils/database/members";
import MemberRow from "@/app/dashboard/members/memberRow";

export default async function MembersTable() {

    const {data: members}: { data: Member[] } = await fetchMembers()

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