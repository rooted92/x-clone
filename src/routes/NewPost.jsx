import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './NewPost.module.css';

import Modal from '../components/Modal';

function NewPost({ onAddPost }) {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        onAddPost(postData);
        onCancel();
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
                </p>
                <p className='mb-4'>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required onChange={authorChangeHandler} />
                </p>
                <p className={classes.actions}>
                    <Link to=".." className='hover:scale-110 transition-all ease-in' type='button'>Cancel</Link>
                    <button className='hover:scale-110 transition-all ease-in'>Submit</button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;