import React from "react";
// import { useStatefy } from "react-statefy";
import { login, logout } from "./action";
import { NavLink } from 'react-router-dom'
import userState from "../../state/user";
import { useStatefy } from "react-statefy";


export default function Navigation() {
    const { isAuthenticated } = useStatefy(userState, 'isAuthenticated')
    // const isAuthenticated = true;
    return <>
        <NavLink to="/" style={{ marginRight: 10 }} >home</NavLink>
        {isAuthenticated && <NavLink to="user" style={{ marginRight: 10 }} >user</NavLink>}
        {isAuthenticated
            ? <button onClick={logout}>logout</button>
            : <button onClick={login}>login</button>
        }
    </>
}