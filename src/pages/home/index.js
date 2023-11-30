import { useRenderCount } from '@uidotdev/usehooks';
import React from 'react'
import Posts from './components/posts'
import Bookmarks from './components/bookmarks'
import PopularPosts from './components/popular-posts';
import Favorites from './components/favorites';

export default function Home() {

    const renderCount = useRenderCount();

    return (
        <>
            <h1>Home</h1>
            <small>render count :{renderCount}</small>
            <div style={{ display: 'flex' }}>
                <Posts />
                <div style={{ width: '1px', margin: 20, background: 'gray' }}></div>
                <Bookmarks />
                <div style={{ width: '1px', margin: 20, background: 'gray' }}></div>
                <Favorites />
                <div style={{ width: '1px', margin: 20, background: 'gray' }}></div>
                <PopularPosts />
            </div>
        </>
    )
}
