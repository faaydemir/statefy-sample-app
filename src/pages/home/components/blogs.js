import React, { useEffect } from 'react'
import { useRenderCount } from '@uidotdev/usehooks';
import { useStatefy } from 'react-statefy';
import blogState from '../../../state/blogs';
import { loadBlogs } from '../action';

export default function Blogs() {

    const renderCount = useRenderCount();
    const { blogs } = useStatefy(blogState, 'blogs')
    useEffect(() => {
        loadBlogs()
    }, [])
    return (
        <div>
            <h2>Blogs</h2>
            <small>render count :{renderCount}</small>
            {blogs &&
                blogs.map(blog => (
                    <div key={blog.id}>
                        <h4>{blog.title}</h4>
                        <p>{blog.body}</p>
                    </div>
                ))
            }
        </div>
    )
}