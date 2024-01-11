export async function GET() {
    const members: Member[] = [
        {
            "id": 0,
            "name": "Coralie",
            "picture": "/assets/members/coralie-presidente.jpg",
            "role": "Présidente",
            "active": true
        },
        {
            "id": 1,
            "name": "Marilyn",
            "picture": "/assets/members/marilyn-secretaire.jpg",
            "role": "Secrétaire",
            "active": true
        },
        {
            "id": 2,
            "name": "Lina",
            "picture": "/assets/members/lina-tresoriere.jpg",
            "role": "Trésorière",
            "active": true
        },
        {
            "id": 3,
            "name": "Emma",
            "picture": "/assets/members/emma-partenariat.jpg",
            "role": "Marketing",
            "active": true
        },
        {
            "id": 4,
            "name": "Mathilde",
            "picture": "/assets/members/mathilde-com.jpg",
            "role": "Communication",
            "active": true
        },
        {
            "id": 5,
            "name": "Julie",
            "picture": "/assets/members/julie-com.jpg",
            "role": "Communication",
            "active": true
        },
    ]
    return Response.json(members)
}