import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostsList';

function Posts() {

  return (
    <>
      <Outlet />
      <main>
        {/* the returned data in the loader function below can be passed into the Posts component or any children components like PostsList */}
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();
  console.log(data);
  return data.posts;
};