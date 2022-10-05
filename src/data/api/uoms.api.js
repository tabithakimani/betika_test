import client from "./client";

export default {
    async getUnitOfMeasure(filters) {
        return client.parseResponse(await client.get('/uoms', filters));
    },
}
