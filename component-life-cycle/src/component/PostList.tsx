import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
}

function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        //     axios.post('https://jsonplaceholder.typicode.com/posts', {
        // title: 'new post',
        // body: 'this is a new post',
        // });
    }, []); // The empty dependency array ensures this runs only once.

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;