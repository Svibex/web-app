import * as React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import CardsList from './components/CardsList';
import StartPage from './components/StartPage'
import PostsList from "./routes/PostsList";
import UsersList from "./routes/UsersList";
import './styles/style.css'

const App = () => {

    return (
        <div className={'body'}>
            <Header />
            <StartPage />
            <div>
                <h2>Купили билеты</h2>
                <CardsList />
            </div>
            <Routes>
                <Route path="users" element={<UsersList  />} />
                <Route path="users/:id" element={<UsersList  />} />
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