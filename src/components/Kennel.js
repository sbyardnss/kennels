import React from "react"
import { LocationList } from "./location/LocationList.js"
import "./Kennel.css"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { AnimalList } from "./animal/AnimalList.js"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <LocationList />
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
    </>
)