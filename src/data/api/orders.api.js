import client from "./client";

export default {
    async createOrder(data) {
        return client.parseResponse(await client.post('/orders', data));
    },
}
