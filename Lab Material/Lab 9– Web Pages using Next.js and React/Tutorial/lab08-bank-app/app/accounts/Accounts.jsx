import React from 'react'
import Account from '@/app/accounts/Account'
import styles from '@/app/page.module.css'

export default function Accounts({ initialAccounts }) {

    return (
        <>
            <table id="accounts" className={styles.table}>
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
