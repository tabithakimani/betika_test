import client from "./client";

export default {
    async login(credentials) {
        return client.parseResponse(await client.post('/login', credentials))
    },
    async logout(filters) {
        return client.parseResponse(await client.get('/logout', filters))
    },
    async register(data) {
        return client.parseResponse(await client.post('/register', data));
    },
}
