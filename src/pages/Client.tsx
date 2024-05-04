import { Outlet } from "react-router-dom";
import ClientHeader from "../components/ClientHeader";
import ClientFooter from "../components/ClientFooter";

export default function Client() {
    return (
        <>
            <ClientHeader/>
            <Outlet/>
            <ClientFooter/>
        </>
    )
}