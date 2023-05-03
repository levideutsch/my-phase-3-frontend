const url = 'http://localhost:9292/jokes'

export default {
    get() {
        return fetch(url).then(res => res.json())
    },

    create(joke) {
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(joke)
        }

        return fetch(url, options).then(res => res.json())
    },

    update(id, joke) {
        const options = {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                body: joke.body,
            }),
        }

        return fetch(`${url}/${id}`, options)
            .then((r) => r.json())
    },

    delete(id) {
        return fetch(`${url}/${id}`, {
          method: "DELETE",
        })
    }
}