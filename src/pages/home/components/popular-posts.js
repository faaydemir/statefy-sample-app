import React, { useEffect, useState } from 'react'
import { useRenderCount } from '@uidotdev/usehooks';
import { fetchPopularPosts } from '../../../api';
export default function PopularPosts() {

    const renderCount = useRenderCount();
    const [popularPosts, setPopularPosts] = useState([])

    useEffect(() => {
        const loadPopularPosts = async () => {
            const popularPosts = await fetchPopularPosts();
            setPopularPosts(popularPosts);
        }
        loadPopularPosts();
    }, [])

    return (
        <div>
            <h2>Popular Post</h2>
            <small>without statefy</small><br/>
            <small>render count :{renderCount}</small>
            {
                popularPosts && popularPosts.map(post => (
                    <div key={post}>
                        <p>{post}</p>
                    </div>
                ))
            }
        </div>
    )
}
