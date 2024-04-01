import React from 'react'

export default function Accounts({ initialAccounts }) {

    return (
        <>
            <h1>2 + 5 = {2 + 5}</h1>
            <ol>
                {initialAccounts
                    .map(account =>
                        <li>{account.accountNo}
                            - {account.firstname}
                        </li>
                    )}
            </ol>
        </>

    )
}
