import React from 'react'
import {Home, Build, ShoppingCart, CarRental, AutoAwesomeMosaic, Info, Call} from '@mui/icons-material/';

export const SidebarData = [
    {
        title: 'Bosh sahifa',
        icon: <Home />,
        link: '/',
        data: "100"
    },
    {
        title: 'Biz haqimizda',
        icon: <Info />,
        link: '/about',
        data: "100"
    },

    {
        title: 'AvtoTex xizmat',
        icon: <Build />,
        link: '/technoservice',
        data: "100"
    },

    {
        title: 'Avto savdo',
        icon: <ShoppingCart />,
        link: '/autoshop',
        data: "100"
    },

    {
        title: 'Avto ijara',
        icon: <CarRental />,
        link: '/rentcar',
        data: "100"
    },

    {
        title: 'Avto qismlar',
        icon: <AutoAwesomeMosaic />,
        link: '/products',
        data: "100"
    },
    {
        title: "Bog'lanish",
        icon: <Call />,
        link: '/contacts',
        data: '100'
    },
]
