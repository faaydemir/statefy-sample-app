import React, { useEffect } from 'react'
import { useRenderCount } from '@uidotdev/usehooks';
import { useStatefy } from 'react-statefy';
import blogState from '../../../state/blog';
import { bookmarkPost, loadPosts } from '../action';

export default function Posts() {

    const renderCount = useRenderCount();
    const { posts } = useStatefy(blogState, 'posts')
    useEffect(() => {
        loadPosts()
    }, [])
    return (
        <div>
            <h2>Posts</h2>
            <small>render count :{renderCount}</small>
            {posts &&
                posts.map(post => (
                    <div key={post.id} style={{ marginBottom: 20, marginTop: 20 }}>
                        <h3>{post.title}<button style={{ marginLeft: 40 }} onClick={() => bookmarkPost(post.title)}>bookmark</button></h3> 
                        <p style={{ width: 400 }}>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}