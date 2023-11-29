import React from 'react'
import userState from '../../state/user';
import { useStatefy } from "react-statefy";
import { useRenderCount } from '@uidotdev/usehooks';

export default function User() {

    const { user, isAuthenticated } = useStatefy(userState);
    const renderCount = useRenderCount();
    return (<>
        <h1>User</h1>
        <small>render count :{renderCount}</small>
        {isAuthenticated
            ? <>
                <div>{user.name}</div>
                <div>{user.email}</div>
            </>
            : <p>login to see user</p>}
    </>
    )
}
