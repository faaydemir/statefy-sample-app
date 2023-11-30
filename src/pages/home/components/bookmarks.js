import React, { useEffect } from 'react'
import { useRenderCount } from '@uidotdev/usehooks';
import userState from '../../../state/user';
import blogState from '../../../state/blog';
import { useStatefy } from 'react-statefy';
import { loadBookmarks } from '../action';
export default function Bookmarks() {

    const renderCount = useRenderCount();
    const { bookmarks } = useStatefy(blogState, 'bookmarks')
    const { isAuthenticated } = useStatefy(userState, 'isAuthenticated')

    useEffect(() => {
        if (isAuthenticated) {
            loadBookmarks()
        }
    }, [isAuthenticated])
    
    return (
        <div>
            <h2>Bookmarks</h2>
            <small>render count :{renderCount}</small>
            {isAuthenticated
                ? bookmarks && bookmarks.map(bookmark => (
                    <div key={bookmark}>
                        <p>{bookmark}</p>
                    </div>
                ))
                : <p>login to see bookmarks</p>
            }
        </div>
    )
}
