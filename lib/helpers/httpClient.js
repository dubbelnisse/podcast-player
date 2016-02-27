export function get (route) {
  return new Promise((resolve, reject) => {
    fetch(route)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

export function post (route, payload) {
  var options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(payload)
  }

  return new Promise((resolve, reject) => {
    fetch(route, options)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

export default {
  get: get,
  post: post
}
