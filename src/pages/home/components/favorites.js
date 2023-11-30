import React, { useEffect } from 'react'
import { useRenderCount } from '@uidotdev/usehooks';
import userState from '../../../state/user';
import blogState from '../../../state/blog';
import { useStatefy } from 'react-statefy';
import { loadFavorites } from '../action';
export default function Favorites() {

    const renderCount = useRenderCount();
    const { favorites, isFavoritesLoading } = useStatefy(blogState, 'favorites', 'isFavoritesLoading')
    const { isAuthenticated } = useStatefy(userState, 'isAuthenticated')

    useEffect(() => {
        if (isAuthenticated) {
            loadFavorites()
        }
    }, [isAuthenticated])

    return (
        <div>
            <h2>Favorites</h2>
            <small>render count :{renderCount}</small>
            {isAuthenticated
                ? (
                    isFavoritesLoading
                        ? <p><i>loading ..</i></p>
                        : favorites && favorites.map(favorite => (
                            <div key={favorite}>
                                <p>{favorite}</p>
                            </div>
                        ))
                )
                : <p>login to see favorites</p>
            }
        </div>
    )
}
