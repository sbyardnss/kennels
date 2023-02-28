import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerList } from "./Customer/CustomerList"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationProvider } from "./location/LocationProvider"
import { CustomerProvider } from "./Customer/CustomerProvider"




export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>

                    <Outlet />
                </>
            }></Route>

            <Route path="animals" element={
                <AnimalProvider>
                    <AnimalList />
                </AnimalProvider>

            } />
            <Route  path="locations" element={
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            } />
            <Route  path="customers" element={
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>
            } />


        </Routes>
        /*

            

            
            <Route path="/" >
                <Route path="locations" element={<LocationList />} />
                <Route path="customers" element={<CustomerList />} />
                <Route path="animals" element={<AnimalList />} />

            </Route>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            */
    )
}