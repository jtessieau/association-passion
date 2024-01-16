"use client"

function handleEdit() {
    console.log("edit")
}

function handleDelete() {
}

export default function MemberRow({member}: { member: Member }) {
    return (
        <tr>
            <td>{member.name}</td>
            <td>{member.role}</td>
            <td>{member.picture}</td>
            <td>{member.isActive}</td>
            <td>
                <button onClick={handleEdit}>edit
                </button>
            </td>
            <td>
                <button onClick={handleDelete}>delete</button>
            </td>
        </tr>
    )
}
