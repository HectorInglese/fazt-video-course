import CardComponent from '@/components/CardComponent';
import React from 'react'
import PostInterface from '@/interface/postInterface';
const LoadPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();
    return (posts);
};
const PotsPage = async () => {
    const posts = await LoadPosts();
    return (
        <section className="gap-2 w-full grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
            {posts.map((post: PostInterface) => (
                <CardComponent post={post} key={post.id} />
            ))};
        </section>
    );
};
export default PotsPage;