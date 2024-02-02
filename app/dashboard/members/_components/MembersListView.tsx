'use client'

import './MembersListView.scss'
import {useEffect, useRef, useState} from "react";
import {deleteMemberById, fetchAllMembers} from "@/app/utils/database/membersApiCall";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrashCan, faSnowflake, faUserCheck} from "@fortawesome/free-solid-svg-icons";
import DeleteMemberModal from "@/app/dashboard/members/_components/DeleteMemberModal";
import Link from "next/link";
import Image from "next/image";

export default function MembersListView() {

    const [members, setMembers] = useState<MemberFromDatabase[]>([])
    const [showModal, setShowModal] = useState(false)
    const [memberToDelete, setMemberToDelete] = useState<null | MemberFromDatabase>(null)
    const [deleteConfirmation, setDeleteConfirmation] = useState(false)

    useEffect(() => {
        fetchAllMembers()
            .then(response => setMembers(response.data))
            .catch(error => console.error("Error fetching members: " + error))

        console.log("fetch...")
    }, []);

    useEffect(() => {
        async function handleDelete(id: number) {
            if (memberToDelete) {
                const memberDeleted = await deleteMemberById(40)

                if (memberDeleted) {
                    setMembers(prevMembers => prevMembers.filter(m => m.id !== memberToDelete.id));

                    setMemberToDelete(null)
                    setDeleteConfirmation(false)
                }
            }
        }

        if (deleteConfirmation && memberToDelete) {
            handleDelete(memberToDelete.id).then(res => console.log("deleted ..."))
        }

        console.log("2eme useffect")
    }, [memberToDelete, deleteConfirmation]);


    return (
        <div className={"dash-member-list"}>
            <div className={"dash-member-list-header"}>
                <h1>Gestion des membres</h1>
                <Link href={"/dashboard/members/new-member"}>
                    <button aria-label={"Ajouter un membre"}> + Ajouter un membre</button>
                </Link>
            </div>

            <ul className={"dash-member-list-filter"}>
                <li className={"actif"}>filter 1</li>
                <li>filter 2</li>
                <li>filter 3</li>
            </ul>

            <div className={"dash-member-list-search"}>
                <div className={"dash-member-list-counter"}>{members.length + " membres"}</div>
                <div className={"dash-member-list-searchbar-container"}>
                    <label htmlFor={"dash-member-list-searchbar"}>Rechercher: </label>
                    <input type={"text"} id={"dash-member-list-searchbar"} name={"dash-member-list-searchbar"}/>
                </div>
            </div>

            <table className={"dash-member-list-table"}>
                <tbody>
                {members.map(member => {
                        return (
                            <tr key={member.id} className={member.isActive ? "member-active" : "member-frozen"}>
                                <td className={"dash-member-list-table-id"}>{member.id}</td>
                                <td className={"dash-member-list-table-picture"}>
                                    <Image src={"/assets/members/default.jpg"} alt={"profile"} width={100} height={100}/>
                                </td>
                                <td className={"dash-member-list-table-name"}>{member.name}</td>
                                <td className={"dash-member-list-table-role"}>{member.role}</td>
                                <td className={"dash-member-list-table-active"}>
                                    <div className={"dash-member-list-table-btn"}>
                                        {member.isActive ?
                                            <FontAwesomeIcon icon={faUserCheck} className={"active-icon"}/>
                                            :
                                            <FontAwesomeIcon icon={faSnowflake}/>
                                        }
                                    </div>
                                </td>
                                <td className={"dash-member-list-table-edit"}>
                                    <Link href={"/dashboard/members/edit/" + member.id}>
                                        <button aria-label="edit" className={"dash-member-list-table-btn"}>
                                            <FontAwesomeIcon icon={faPenToSquare}/>
                                        </button>
                                    </Link>
                                </td>
                                <td className={"dash-member-list-table-delete"}>
                                    <button aria-label="delete" className={"dash-member-list-table-btn"} onClick={() => {
                                        setMemberToDelete(member)
                                        setShowModal(true)
                                    }}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
            {(showModal && memberToDelete) &&
                <DeleteMemberModal
                    setShowModal={setShowModal}
                    setDeleteConfirmation={setDeleteConfirmation}
                    memberToDelete={memberToDelete}
                />}
        </div>
    )
}