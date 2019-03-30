import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inventory Stats',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Add Inventory',
    icon: 'nb-home',
    link: '/pages/forms/inputs',
  },
  {
    title: 'Dispatch Inventory',
    icon: 'nb-home',
    link: '/pages/tables/smart-table',
  },
  {
    title: 'Inventory Status',
    icon: 'nb-home',
    link: '/pages/tables/smart-table',
  }
];
