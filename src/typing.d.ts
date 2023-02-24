type Customer = {
    name: string,
    email: string
}

type CustomerList = {
    name: ID,
    value: Customer

}

type TrackingItem = {
    customer_id: string,
    customer: Customer,
    items: Item[]
}

type Item = {
    item_id: number
    name: string
    price: number
    quantity: number
}

type OrderResponse = {
    value: Order
}

type CustomerResponse = {
    name: number,
    value: Customer
}

type Order = {
    Address: string
    City: string
    Lat: number
    Lng: number
    carrier: string
    createdAt: string
    shippingCost: number
    trackingId: string
    trackingItems: TrackingItems
}