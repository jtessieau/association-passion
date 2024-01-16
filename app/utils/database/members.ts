async function fetchMembers() {
    const response = await fetch(process.env.BASE_URL + "/api/members", {
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

export {fetchMembers}