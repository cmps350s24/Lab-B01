import React from 'react'
import Account from '@/app/accounts/Account'

export default function Accounts({ initialAccounts }) {

    return (
        <>
            <table id="accounts">
                <tr>
                    <th>Account No</th>
                    <th>Account Type</th>
                    <th>Balance</th>
                    <th>Action</th>
                </tr>
                {initialAccounts
                    .map(account => <Account account={account}></Account>)
                }
            </table>
        </>

    )
}
