import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/Router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, setLoading} = useContext(AuthContext)

    if (setLoading){
        return <Loader/>
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
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
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component/>}
                        exact={route.exact}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to='/login'/>}
                />
            </Routes>
    )
        ;
};

export default AppRouter;