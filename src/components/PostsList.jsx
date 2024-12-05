import { useState } from 'react';

import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostsList({ isPosting, onStopPosting }) {

    return (
        <>
            {
                isPosting && (
                    <Modal onClose={onStopPosting}>
                        <NewPost
                            onCancel={onStopPosting} />
                    </Modal>
                )
            }


            <ul className={classes.posts}>
                <Post author='Manuel' body='Check out the full course!' />
            </ul>
        </>

    );
}

export default PostsList;