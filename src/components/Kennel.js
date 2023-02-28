import React from "react"
import { LocationList } from "./location/LocationList.js"
import "./Kennel.css"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { AnimalList } from "./animal/AnimalList.js"
import { LocationProvider } from "./location/LocationProvider.js"
import { CustomerProvider } from "./Customer/CustomerProvider.js"
import { CustomerList } from "./Customer/CustomerList.js"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>

        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>

        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    </>
)