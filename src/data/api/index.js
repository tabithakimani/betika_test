import products from "@/data/api/products.api";
import uoms from "@/data/api/uoms.api";
import users from "@/data/api/users.api";
import orders from "@/data/api/orders.api";

export default {
    ...products,
    ...uoms,
    ...users,
    ...orders
}
