const url = 'http://localhost:9292/users'

export default {
    getSingle(id) {
        return fetch(`${url}/${id}`).then(res => res.json())
    }
}