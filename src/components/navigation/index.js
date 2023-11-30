import React from "react";
import { login, logout } from "./action";
import { NavLink } from 'react-router-dom'
import userState from "../../state/user";
import { useStatefy } from "react-statefy";
import { useRenderCount } from "@uidotdev/usehooks";


export default function Navigation() {
    const { isAuthenticated } = useStatefy(userState, 'isAuthenticated')
    const renderCount = useRenderCount();
    return <div>
        <NavLink to="/" style={{ marginRight: 20 }} >home</NavLink>
        <NavLink to="user" style={{ marginRight: 20, visibility: isAuthenticated ? 'visible' : 'hidden' }} >user</NavLink>
        {isAuthenticated
            ? <button onClick={logout}>logout</button>
            : <button onClick={login}>login</button>
        }
        <small style={{ marginLeft: 40 }}>render count :{renderCount}</small>
    </div>
}