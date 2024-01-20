import {PrismaClient} from "@prisma/client";
import MemberFormValidator from "@/app/utils/validators/MemberFormValidator";
import {sanitizeString} from "@/app/utils/sanitizer/sanitizer";

function handleSuccess(data: any, status: number) {
    return Response.json({
        message: 'ok',
        data: data,
    }, {
        status: status
    })
}

function handleError(error: any, status: number) {
    return Response.json({
        error: "An error occurred",
        details: error
    }, {
        status: status
    })
}


const prisma = new PrismaClient()

export async function GET(request: Request, {params}: { params: { id: string } }) {
    try {
        const result = await prisma.members.findUnique({
            where: {
                id: parseInt(params.id)
            }
        })
        if (result !== null) {
            return handleSuccess(result, 200)
        } else {
            return handleError("No entry returned by database.", 404)
        }
    } catch (error) {
        return handleError(error, 500)
    } finally {
        await prisma.$disconnect()
    }
}

export async function PATCH(request: Request, {params}: { params: { id: string } }) {
    try {
        const formData = await request.formData()

        // -- Validation -- //
        const validation = MemberFormValidator(formData)

        if (!validation.isValid) {
            return handleError(validation.errors, 400)
        }

        // -- Sanitize -- //

        const formDataArray: Member = {
            name: sanitizeString(formData.get("memberName")?.toString() + ""),
            role: sanitizeString(formData.get("memberRole")?.toString() + ""),
            isActive: (formData.get("memberIsActive")?.toString() + "") == "true",
            picture: ""
        }

        const result = await prisma.members.update({
            where: {
                id: parseInt(params.id)
            },
            data: formDataArray
        })

        if (result !== null) {
            return handleSuccess(result, 200)
        } else {
            return handleError("No entry returned by database.", 404)
        }

    } catch (error) {
        return handleError(error, 500)
    } finally {
        await prisma.$disconnect()
    }
}

export async function DELETE(request: Request, {params}: { params: { id: string } }) {
    try {
        await prisma.members.delete({
            where: {
                id: parseInt(params.id)
            }
        })
        return new Response(null, {
            status: 204
        })
    } catch (error) {
        return handleError(error, 500)
    } finally {
        await prisma.$disconnect()
    }
}