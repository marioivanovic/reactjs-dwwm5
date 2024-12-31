import React from 'react'
import Card from '../card/Card.js'
import { useFetchFakeUsers } from './../../hooks/fakeUsersList'

function Cards() {
    const { users, error } = useFetchFakeUsers();

    if (error) return <div>{error}</div>
    return (
        <>
            {users.map(user => (
                <Card key={user.id} user={user} />
            ))}
        </>


    )
}

export default Cards
