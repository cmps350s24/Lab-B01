import React from 'react'
import Account from '@/app/accounts/Account'
import styles from '@/app/page.module.css'

export default function Accounts({ initialAccounts }) {

    return (
        <>
            <label for="acctType">
                Account Type
            </label>
            <select id="acctType" onchange="handleLoadAccounts(this.value)"
                className={styles.filterDropdown}>
                <option value="All">All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>
            
            <table id="accounts" className={styles.table}>
                <thead>
                    <tr>
                        <th>Account No</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {initialAccounts
                        .map(account => <Account account={account}></Account>)
                    }
                </tbody>
            </table>
        </>

    )
}
