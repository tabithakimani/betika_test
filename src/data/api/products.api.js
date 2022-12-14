import client from "./client";

export default {
    async getProducts(filters) {
        return client.parseResponse(client.parseResponse(await client.get('/products', filters)));
    },
    async getProduct(id) {
        return client.parseResponse(await client.get('/products/' + id));
    },
    async getTags(filters) {
        return client.parseResponse(await client.get('/tags', filters));
    },
}
