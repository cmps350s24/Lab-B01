import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AccountsRepo {

    async addOwner(owner) {

    }
    async getOwners() {

    }
    async getAccounts(acctType) {

    }
    async addAccount(account) {

    }

    async updateAccount(accountNo, account) {

    }

    async getAccount(accountNo) {

    }
    async searchOwner(name) {

    }

    async deleteAccount(accountNo) {

    }
    async getTransactions(accountNo) {

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