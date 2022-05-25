import * as React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import UserPage from './routes/UserPage';
import Post from './routes/Post';
import PostsList from "./routes/PostsList";

const App = () => {

    return (
        <div>
            <Header />
            <Routes>
                <Route path="users" element={<UserPage  />} />
                <Route path="posts" element={<PostsList  />} />
            </Routes>
        </div>
    );
}

export default App;

// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => console.log(data))
// });

// <BrowserRouter>
//     <Header />
//     <Routes>
//         <Route path="/*" element={<UsersList />}/>
//         <Route path="/UserPage" element={<UserPage />}/>
//         <Route path="/PostsList" element={<PostsList />}/>
//         <Route path={"/Post"} element={<Post posts={posts}/>}/>
//     </Routes>
// </BrowserRouter>