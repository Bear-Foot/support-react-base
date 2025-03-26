import { myEmitter } from "../emitter"
import { mockActors } from "../mocks/actors"

export const sleep = (time = 500) => {
  return new Promise(res => {
    setTimeout(res, time)
  })
}

export const loginRequest = async ({ email, password }) => {
  await sleep()
  if (!email || !password) {
    throw {
      code: 'both_required',
      message: 'Both email and password are required',
    }
  }
  if (email === 'error') {
    myEmitter.emit('networkError')

    throw {
      code: 'combination_mismatch',
      message: 'Wrong email/password combination',
    }
  }

  return {
    token: 'superToken',
  }
}

export const meRequest = async ({ token }) => {
  await sleep()

  if (!token) {
    throw {
      error: 'unauthorized',
    }
  }

  return {
    username: 'Personne',
  }
}

export const getActors = async ({
  page = 1,
  resultsPerPage = 50,
  search,
  sort = 'last_name',
  sortDirection = 'asc',
}) => {
  await sleep()

  const filteredActors = mockActors.filter(actor =>
    actor.last_name.toUpperCase().indexOf(search.toUpperCase()) > -1
    || actor.first_name.toUpperCase().indexOf(search.toUpperCase()) > -1,
  )
  const sortedActors = filteredActors.sort((a, b) => {
    if (a[sort]?.toUpperCase() < b[sort]?.toUpperCase()) return -1
    if (a[sort]?.toUpperCase() > b[sort]?.toUpperCase()) return 1
    
    return 0
  })

  if (sortDirection === 'desc') {
    sortedActors.reverse()
  }

  const truncatedActors = sortedActors.slice(
    resultsPerPage * (page - 1),
    resultsPerPage * (page),
  )

  return {
    totalResults: sortedActors.length,
    totalPages: Math.ceil(sortedActors.length / resultsPerPage),
    results: truncatedActors,
    page,
  }
}