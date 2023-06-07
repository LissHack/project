import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {routes} from "../router/Router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    path={route.path}
                    element={<route.component/>}
                    exact={route.exact}
                />
            )}
            <Route
                path="*"
                element={<Navigate to='/posts'/>}
            />
        </Routes>
    );
};

export default AppRouter;