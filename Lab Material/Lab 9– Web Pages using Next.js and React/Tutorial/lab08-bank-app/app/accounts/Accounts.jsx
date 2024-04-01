'use client'
import { React, useState } from 'react'
import Account from '@/app/accounts/Account'
import styles from '@/app/page.module.css'



export default function Accounts({ initialAccounts }) {
    const [accounts, setAccounts] = useState(initialAccounts)
    async function handleLoadAccounts(accountType) {
        const response = await fetch(`/api/accounts?type=${accountType}`)
        setAccounts(await response.json())
    }

    return (
        <>
            <label htmlFor="acctType">
                Account Type
            </label>
            <select id="acctType" onChange={e => handleLoadAccounts(e.target.value)}
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
                    {accounts
                        .map(account => <Account account={account}></Account>)
                    }
                </tbody>
            </table>
        </>

    )
}
