import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()

export async function GET(request) {
    try {
        const accounts = await accountsRepo.getAccounts()
        return Response.json(accounts, { status: 200 })
    } catch (error) {
        return Response.json("Internal error happened", { status: 500 })
    }
}

export async function POST(request) {
    try {
        const account = await request.json()
        const response = accountsRepo.addAccount(account)
        return Response.json(response, { status: 201 })
    }
    catch (error) {
        return Response.json("Internal error happened", { status: 500 })
    }
}