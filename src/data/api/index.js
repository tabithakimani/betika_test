import products from "@/data/api/products.api";
import uoms from "@/data/api/uoms.api";
import users from "@/data/api/users.api";

export default {
    ...products,
    ...uoms,
    ...users
}