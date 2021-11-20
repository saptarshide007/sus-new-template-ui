// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill,IconUsers } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconUsers
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Applications',
    type: 'group',
    children: [
        {
            id: 'util-shadow',
            title: 'Recruitment',
            type: 'item',
            url: '/utils/recruitment',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
       
    ]
};

export default utilities;
