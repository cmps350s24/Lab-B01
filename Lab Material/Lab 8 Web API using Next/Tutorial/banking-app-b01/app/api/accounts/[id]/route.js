import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()

export async function GET(request, { params }) {
    const accountNo = params.id
    const account = await accountsRepo.getAccount(accountNo)
    return Response.json(account, { status: 200 })
}