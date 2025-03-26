import { useQuery } from "react-query"
import { Link } from "react-router"
import { useState } from "react"
import styled from "styled-components"
import { MenuItem, Select, TextField } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

import { getActors } from "../requests"

const columns  = [
  { field: 'first_name', headerName: 'Column 1', width: 150 },
  { field: 'last_name', headerName: 'Column 2', width: 150 },
]

export const Actors = () => {
  const [search, setSearch] = useState<string>('')
  const [sort, setSort] = useState('first_name')
  const [sortDirection, setSortDirection] = useState('asc')
  const [resultsPerPage, setResutsPerPage] = useState<number>(20)
  const [page, setPage] = useState<number>(1)

  const actorsQuery = useQuery({
    queryFn: () => getActors({ search, sort, sortDirection, resultsPerPage, page }),
    queryKey: ['actorList', search, sort, sortDirection, resultsPerPage, page],
    enabled: true,
  })

  // { page }

  return <div>
    <Link to='/actors/create'>Nouvel acteur</Link>
    <div>
      <h3>Filters</h3>
      <TextField
        label="Recherche par nom"
        size="small"
        value={search}
        onChange={e => {
          setSearch(e.target.value)
          setPage(1)
        }}
      />
      <Select value={sort} onChange={e => setSort(e.target.value)} size="small">
        <MenuItem value='first_name'>Prénom</MenuItem>
        <MenuItem value='last_name'>Nom</MenuItem>
      </Select>
      <select >
      </select>
      <select value={sortDirection} onChange={e => setSortDirection(e.target.value)}>
        <option value='asc'>Cwoassants</option>
        <option value='desc'>Des croissants</option>
      </select>
      <select value={resultsPerPage} onChange={e => {
        setResutsPerPage(e.target.value)
        setPage(1)
      }}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <div>
        {actorsQuery.data && Array(actorsQuery.data.totalPages).fill(null).map((n, i) => (
          <PageNumber onClick={() => setPage(i + 1)} key={i} $active={page === i + 1}>
            {i + 1}
          </PageNumber>
        ))}
      </div>
    </div>
    <div>
      {actorsQuery.isLoading && 'Chargement des acteurs'}
      {actorsQuery.data?.results && <DataGrid
        columns={columns}
        rows={actorsQuery.data.results}
      />}
    </div>
  </div>
}


const PageNumber = styled.span`
  display: inline-block;
  margin: 3px;
  cursor: pointer;
  text-decoration: underline;

  ${({ $active })=> $active ? `
    font-weight: bold;
    color: blue;
  
  ` : ''};
`