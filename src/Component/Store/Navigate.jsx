import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaUserLock, FaUserLarge } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';
import { FaDraftingCompass } from 'react-icons/fa';
import { FaCodeBranch } from 'react-icons/fa6';
import { FaHandsHelping } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';

export const Navigate = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <MdDashboard />,
  },
  {
    key: 'userLog',
    label: 'UserLog',
    path: '/userLog',
    icon: <FaUserLock />,
  },
  {
    key: 'user',
    label: 'User',
    path: '/user',
    icon: <FaUserLarge />,
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <CiSettings />,
    children: [
      {
        key: 'Company',
        label: 'Company',
        path: '/settings/company',
        icon: <FaDraftingCompass />,
      },
      {
        key: 'Branch',
        label: 'Branch',
        path: '/settings/branch',
        icon: <FaCodeBranch />,
      },
    ],
  },
];

export const NavigateBottom = [
  {
    key: 'help',
    label: 'Help',
    path: '/help',
    icon: <FaHandsHelping />,
  },
  {
    key: 'logout',
    label: 'LogOut',
    path: '/logout',
    icon: <CiLogout />,
  },
];



