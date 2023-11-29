import { useRenderCount } from '@uidotdev/usehooks';
import React from 'react'
import Blogs from './components/blogs'
import Bookmarks from './components/bookmarks'

export default function Home() {

    const renderCount = useRenderCount();

    return (
        <>
            <h1>Home</h1>
            <small>render count :{renderCount}</small>
            {/* split page vertically into 2  */}

            <div style={{ display: 'flex', 'grid-template-columns': '1fr 1fr' }}>
                <Blogs />
                <div style={{ width: '1px', margin: 20, background: 'gray' }}></div>
                <Bookmarks />
            </div>
        </>
    )
}
