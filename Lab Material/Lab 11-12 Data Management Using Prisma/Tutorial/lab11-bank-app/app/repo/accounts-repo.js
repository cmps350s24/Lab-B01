import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AccountsRepo {

    async addOwner(owner) {
        try {
            return prisma.owner.create({
                data: owner
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
    async getOwners() {
        try {
            return prisma.owner.findMany()
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
    async getAccounts(acctType) {
        try {
            if (!acctType || acctType == "All") {
                return prisma.account.findMany()
            } else {
                return prisma.account.findMany({
                    where: {
                        acctType
                    }
                })
            }
        } catch (error) {
            return {
                error: error.message
            }
        }

    }
    async addAccount(account) {
        try {
            return prisma.account.create({
                data: account
            })
        } catch (error) {
            return {
                error: error.message
            }
        }

    }

    async updateAccount(accountNo, account) {
        try {
            return prisma.account.update({
                data: account,
                where: { accountNo: accountNo }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }

    async getAccount(accountNo) {
        try {
            return prisma.account.findFirst({
                where: { accountNo: accountNo }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
    async deleteAccount(accountNo) {
        try {
            return prisma.account.delete({
                where: { accountNo: accountNo }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }

    async searchOwner(name) {
        try {
            return prisma.owner.findMany({
                where: {
                    OR: [
                        { firstname: { contains: name } },
                        { lastname: { contains: name } },
                    ]
                }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }

    async getTransactions(accountNo) {
        try {
            return prisma.transaction.findMany({
                where: { accountNo: accountNo }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
    async addTransaction(accountNo, transaction) {
        // update the missing information of the transaction object
        transaction.accountNo = accountNo
        transaction.amount = parseInt(transaction.amount.toString());

    }
    // Aggregations 
    async getMinAndMaxBalance() {

    }
    getTop3Accounts() {

    }
    getTransSum(accountNo, fromDate, toDate) {

    }

}

export default new AccountsRepo()