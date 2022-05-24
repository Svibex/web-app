import * as React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import UsersList from './routes/UsersList';
import UserPage from './routes/UserPage';
import PostsList from './routes/PostsList';
import Post from './routes/Post';


function App() {

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  // });

  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<UsersList />}/>
          <Route path="/caught" element={<UserPage />}/>
          <Route path="/card" element={<PostsList />}/>
          <Route path="/card" element={<Post />}/>
        </Routes>
      </>
  );
}

export default App;