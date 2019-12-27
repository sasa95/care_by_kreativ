import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      allTeamJson {
        edges {
          node {
            name
            job
            skill
            image
          }
        }
      }
    }
  `)

  const [teamData, setTeamData] = useState([])

  useEffect(() => {
    const url = require.context('../../images/', true)

    const team = data.allTeamJson.edges
      .map(p => p.node)
      .map(person => {
        return {
          ...person,
          image: url('./' + person.image),
        }
      })

    setTeamData(team)
    console.log(team)
  }, [])

  return <>Team</>
}
export default Team
