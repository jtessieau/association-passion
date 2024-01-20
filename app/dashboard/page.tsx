import Link from "next/link";

export default async function Dashboard() {
    return (
        <ul>
            <li><Link href={"/dashboard/members"}>Gérer les membres</Link></li>
        </ul>
    )
}