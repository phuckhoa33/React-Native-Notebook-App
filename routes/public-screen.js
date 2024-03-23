import * as screens from '../screens';
import * as layouts from '../components/layout';

export const publicScreens = [
    {
        name: "Today",
        component: screens.Home,
        layout: layouts.DefaultLayout
    },
    {
        name: "Inbox",
        component: screens.Inbox,
        layout: layouts.DefaultLayout
    },
    {
        name: "Search",
        component: screens.Search,
        layout: layouts.DefaultLayout
    },
    {
        name: "Browse",
        component: screens.Browse,
        layout: layouts.DefaultLayout
    }
]