import { useState } from 'react';

import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler (event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <NewPost onBodyChage={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author='Manuel' body='Check out the full course!' />
            </ul>
        </>

    );
}

export default PostsList;