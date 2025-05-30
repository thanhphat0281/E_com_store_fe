export interface Product {
    _id?: String;
    name: String
    description: String,
    shortDescription: String,
    price: Number,
    discount: Number,
    images: string[],
    categoryId: string
}