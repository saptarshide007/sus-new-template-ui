import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import CreateRequisition from 'views/forms/CreateRequisition';
import EditForm from 'views/forms/EditForm';
import ApprovalForm from 'views/forms/ApprovalForm';
import ViewForm from 'views/forms/ViewForm';
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/utils/recruitment/view/:id',
            element: <ViewForm />
        },
        {
            path: '/utils/recruitment/approval/:id',
            element: <ApprovalForm />
        },
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/recruitment',
            element: <UtilsShadow />
        },
        {
            path: '/utils/recruitment/new',
            element: <CreateRequisition />
        },
        {
            path: '/utils/recruitment/update/:id',
            element: <EditForm/>
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        }
    ]
};

export default MainRoutes;
