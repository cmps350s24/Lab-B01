import React from 'react'

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
                {initialAccounts.map(account => accountToHTMLRow(account)).join('')}
            </table>
        </>

    )
}
