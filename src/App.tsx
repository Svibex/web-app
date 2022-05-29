import * as React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import StartPage from './pages/StartPage/StartPage'
import PostsList from "./pages/PostsList/PostsList";
import './styles/style.css'
import UserPage from "./pages/UserPage/UserPage";
import UsersList from "./pages/UsersList/UsersList";
import PostPage from './pages/PostPage/PostPage';

const App = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<StartPage  />} />
                <Route path="users" element={<UsersList  />} />
                <Route path="users/:id" element={<UserPage  />} />
                <Route path="users/:id/posts" element={<PostsList number='100'/>} />
                <Route path="posts/:id/comments" element={<PostPage />} />
            </Routes>
        </>
    );
}

export default App;