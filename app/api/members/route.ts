import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {

    const result = await prisma.members.findMany()

    return Response.json({
        message: 'ok',
        status: 200,
        data: result
    })
}

export async function POST(request: Request) {
}

export async function PATCH(request: Request) {
}

export async function DELETE(request: Request) {
}