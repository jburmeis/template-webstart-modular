import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'components/Pages/HomePage';
import Page2 from 'components/Pages/Page2';
import NotFoundPage from 'components/Pages/NotFoundPage';
import { AppRoutes } from 'config/AppRoutes';


const Router: FC = () => (
    <Routes>
        <Route path={AppRoutes.Root} element={<HomePage />} />
        <Route path={AppRoutes.Page2} element={<Page2 />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export default Router;
