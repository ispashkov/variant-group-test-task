import type { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApplicationCreatePage } from '../pages/ApplicationCreatePage';
import { DashboardPage } from '../pages/DashboardPage';
import { AppPath } from '../routing';
import { BaseLayout } from './layouts/BaseLayout';

const router = createBrowserRouter([
  {
    path: AppPath.dashboard,
    Component: BaseLayout,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
      {
        path: AppPath.createApplication,
        Component: ApplicationCreatePage,
      },
    ],
  },
]);

export const AppRoutes: FC = () => <RouterProvider router={router} />;
