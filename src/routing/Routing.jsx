import React, { lazy, Suspense } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

const Spinner = lazy(() => import("../components/UI/Spinner"));
const Login = lazy(() => import("../components/forms/Login"));

const Routing = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/auth/login" element={< Login />} />
            </Routes>
        </Suspense>
    );
};

export default Routing;