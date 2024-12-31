import React from 'react'
import Card from '../card/Card.js'
import { useFetchAgents } from './../../hooks/fakeUsersList'

function Cards() {
    const { agents, error } = useFetchAgents();

    if (error) return <div>{error}</div>
    return (
        <>
            {agents.map(agent => (
                <Card key={agent.uuid} agent={agent} />
            ))}
        </>


    )
}

export default Cards
