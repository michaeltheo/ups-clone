import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ORDERS } from '../graphql/queries'

const useCustomerOrders = (userId:string) => {
    const {loading,data,error} = useQuery(GET_ORDERS)
    const [orders,setOrders] = useState<Order[]>([])



    useEffect(()=>{
        if (!data) return;
    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      Address: value.Address,
      City: value.City,
      Lat: value.Lat,
      Lng: value.Lng,
      carrier: value.carrier,
      createdAt: value.createdAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      trackingItems: value.trackingItems,
    }));

    const customOrders=orders.filter((order:Order)=>order.trackingItems.customer_id===userId)
    setOrders(customOrders)
    },[data,userId])
  return {loading,error,orders}
}

export default useCustomerOrders