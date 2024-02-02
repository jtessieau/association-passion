async function fetchAllMembers() {
    try {
        const response = await fetch(process.env.BASE_URL + "/api/members", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.status === 200) {
            return await response.json()
        }

        return null
    } catch (e) {
        console.error(e)
    }
}

async function fetchMemberById(id: string | number) {
    try {
        const response = await fetch(process.env.BASE_URL + "/api/members/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        return await response.json()
    } catch (e) {
        console.error(e)
    }
}

async function deleteMemberById(id: string | number) {
    try {
        const response = await fetch(process.env.BASE_URL + "/api/members/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response.status === 204
    } catch (e) {
        console.log(e)
        return false
    }
}

export {fetchAllMembers, fetchMemberById, deleteMemberById}