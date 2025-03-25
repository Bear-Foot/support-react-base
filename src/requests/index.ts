const sleep = (time = 500) => {
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

