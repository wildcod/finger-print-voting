import React, {useEffect, useState} from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleBasic = ({ election }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const { candidates, voted_candidates} = election
        const result = [];
        for(let i = 0; i < candidates.length ; i++){
            const d = candidates[i];
            let count = voted_candidates.reduce((n, x) => n + (x === d._id), 0);
            console.log(count);
            const percentage = (count/voted_candidates.length) * 100
            const buildData = {
                name : d.name,
                partyName: d.party_name,
                votes : count,
                voterPercentage : percentage
            }
           result.push(buildData)
        }
        setData(result)
    },[])
  console.log(data)
   return <Table basic>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Candidate</Table.HeaderCell>
                    <Table.HeaderCell>Party</Table.HeaderCell>
                    <Table.HeaderCell>Votes</Table.HeaderCell>
                    <Table.HeaderCell>Total Votes</Table.HeaderCell>
                    <Table.HeaderCell>Vote Percentage</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    data && data.map((d,i) => (
                        <Table.Row>
                            <Table.Cell>{d.name}</Table.Cell>
                            <Table.Cell>{d.partyName}</Table.Cell>
                            <Table.Cell>{d.votes}</Table.Cell>
                            <Table.Cell>{election.voted_candidates.length}</Table.Cell>
                            <Table.Cell>{d.voterPercentage}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
}

export default TableExampleBasic