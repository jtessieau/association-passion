import {PrismaClient} from "@prisma/client"
import MemberFormValidator from "@/app/utils/validators/MemberFormValidator";

const prisma = new PrismaClient()

export async function GET() {
    try {
        const result = await prisma.members.findMany()

        return Response.json({
            message: 'ok',
            data: result
        }, {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        return Response.json({
            "error": "Oops, something wrong happened...",
            "details": error
        }, {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } finally {
        await prisma.$disconnect()
    }
}

export async function POST(request: Request) {
    const formData = await request.formData()

    // -- Validation -- //
    const validation = MemberFormValidator(formData)

    if (!validation.isValid) {
        return Response.json({
            "error": "Les données reçu ne sont pas conformes.",
            "details": validation
        }, {
            status: 400,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }


    // -- Sanitize -- //
    function sanitize(userProvidedString: string) {
        return userProvidedString.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')
    }

    const formDataArray: Member = {
        name: sanitize(formData.get("memberName")?.toString() + ""),
        role: sanitize(formData.get("memberRole")?.toString() + ""),
        isActive: (formData.get("memberIsActive")?.toString() + "") == "true",
        picture: ""
    }

    // -- Storage -- //
    try {
        const result = await prisma.members.create({
            data: formDataArray
        })

        return Response.json({
            "message": "member added",
            "data": result
        }, {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        return Response.json({
            "error": "Oops, something wrong happened...",
            "details": error
        }, {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } finally {
        await prisma.$disconnect()
    }
}