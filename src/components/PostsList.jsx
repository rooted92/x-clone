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


            <ul className={classes.posts}>
                {
                    posts.map((post, index) => (
                        <Post key={index} author={post.author} body={post.body} />
                    ))
                }
                <Post author='Manuel' body='Check out the full course!' />
            </ul>
        </>

    );
}

export default PostsList;