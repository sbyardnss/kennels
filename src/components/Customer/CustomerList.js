import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import "./Customer.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <section className="customers">
            <h2>Customers</h2>
            {
                customers.map(customer => {
                    return (
                        <div key={customer.id} className="customer" id={`customer--${customer.id}`}>
                            <div className="customer__name">
                                Name: {customer.name}
                            </div>
                            <div className="customer__address">
                                Address: {customer.address}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )

}