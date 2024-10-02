import { useQuery } from 'react-query';

function fetchPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
        
        
}

export default function Posts() {
    const { data, isLoading, error } = useQuery('posts', fetchPosts);
    console.log(data);
    

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;

    return (
        <ul>
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}

        </ul>
    );
}



