export async function GET(request, { params }) {
    const accountNo = params.id
    return Response.json({ data: `The data /api/accounts/${accountNo}` }, { status: 200 })
}