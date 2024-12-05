import { useState } from 'react';

import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostsList({ isPosting, onStopPosting }) {

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => {
            return [postData, ...existingPosts];
        });
    }

    return (
        <>
            {
                isPosting && (
                    <Modal onClose={onStopPosting}>
                        <NewPost
                            onCancel={onStopPosting}
                            onAddPost={addPostHandler} />
                    </Modal>
                )
            }


            {
                posts.length === 0 && <p className={`${classes.noPosts} text-center font-semibold text-4xl`}>No posts yet. Add one!</p>
            }
            <ul className={classes.posts}>
                {
                    posts.map(({ author, body }, index) => (
                        <Post key={index} author={author} body={body} />
                    ))
                }
            </ul>
        </>

    );
}

export default PostsList;