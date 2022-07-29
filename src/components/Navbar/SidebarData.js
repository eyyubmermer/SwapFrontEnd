import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Farm',
    path: '/farm',
    icon: <GiIcons.GiFarmer />,
    cName: 'nav-text'
  },
  {
    title: 'Swap',
    path: '/swap',
    icon: <AiIcons.AiOutlineSwap />,
    cName: 'nav-text'
  },
];
