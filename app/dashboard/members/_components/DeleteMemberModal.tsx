import {Dispatch, SetStateAction} from "react";
import "./DeleteMemberModal.scss"

export default function DeleteMemberModal({setShowModal, setDeleteConfirmation, memberToDelete}: {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setDeleteConfirmation: Dispatch<SetStateAction<boolean>>,
    memberToDelete: MemberFromDatabase
}) {

    return (
        <div className={"modal-background"}>
            <div className={"modal-container"}>
                <button className={"close-btn"} onClick={() => setShowModal(false)}>X</button>

                <div className={"modal-title"}>
                    Attention !
                </div>
                <div className={"modal-warning-text"}>
                    <p>
                        Vous etes sur le point de supprimer le membre suivant : <span
                        className={"member-name"}>{memberToDelete.name}</span>
                    </p>
                    <p className={"bold"}>
                        Cette action est irreversible !
                    </p>
                </div>
                <div className={"button-container"}>
                    <button className={"cancel-btn"}>cancel</button>
                    <button className={"confirm-btn"} onClick={() => setDeleteConfirmation(true)}>confirm</button>
                </div>
            </div>
        </div>
    )
}