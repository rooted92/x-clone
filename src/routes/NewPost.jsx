import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';

import Modal from '../components/Modal';

function NewPost() {

    return (
        <Modal>
            <Form method='POST' className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name='body' required rows={3} />
                </p>
                <p className='mb-4'>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name='author' id="name" required />
                </p>
                <p className={classes.actions}>
                    <Link to=".." className='hover:scale-110 transition-all ease-in' type='button'>Cancel</Link>
                    <button className='hover:scale-110 transition-all ease-in'>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // this creates an object from the form data in a basic way (no nested objects)
    await fetch(
        'http://localhost:8080/posts',
        {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return redirect('/');
}