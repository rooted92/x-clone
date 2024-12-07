import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    const posts = useLoaderData();

    return (
        <>
            {
                posts.length > 0 && (
                    <ul className={classes.posts}>
                        {
                            posts.map(({ author, body }, index) => (
                                <Post key={index} author={author} body={body} />
                            ))
                        }
                    </ul>
                )
            }

            {
                posts.length === 0 &&
                <>
                    <p className={`${classes.noPosts} text-center font-semibold text-4xl`}>No posts yet.</p>
                    <p className='text-center mt-4'>Add one!</p>
                </>
            }

        </>

    );
}

export default PostsList;