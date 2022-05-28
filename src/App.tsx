import * as React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import StartPage from './components/StartPage'
import PostsList from "./routes/PostsList";
import './styles/style.css'
import UserPage from "./routes/UserPage";
import CardsList from "./components/CardsList";

const App = () => {

    return (
        <div className={'body'}>
            <Header />
            <Routes>
                <Route path="/" element={<StartPage  />} />
                <Route path="users" element={<CardsList  />} />
                <Route path="users/:id" element={<UserPage  />} />
                <Route path="posts" element={<PostsList  />} />
            </Routes>
        </div>
    );
}

export default App;