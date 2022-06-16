import { useState } from 'react';

import {
  EuiSideNav,
} from '@elastic/eui';

interface SideNavItem {
  id: string;
  name: string;
  items?: SideNavItem[];
  isSelected?: boolean;
  onClick?: () => void;
}

export const SideNav: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<string>('overview');
  const items:SideNavItem[] = [
    {
      id: 'overview',
      name: 'Overview',
      onClick: () => setCurrentItem('overview'),
      isSelected: currentItem === 'overview',
    },
    {
      id: 'content',
      name: 'Content',
      onClick: () => setCurrentItem('content'),
      isSelected: currentItem === 'content',
      items: [
        {
          id: 'indices',
          name: 'Indices',
          onClick: () => setCurrentItem('indices'),
          isSelected: currentItem === 'indices',
        },
        {
          id: 'crawler-settings',
          name: 'Crawler settings',
          onClick: () => setCurrentItem('crawler-settings'),
          isSelected: currentItem === 'crawler-settings',
        },
        {
          id: 'connector-settings',
          name: 'Connector settings',
          onClick: () => setCurrentItem('connector-settings'),
          isSelected: currentItem === 'connector-settings',
        },
      ]
    },
    {
      id: 'app-search',
      name: 'App Search',
      onClick: () => setCurrentItem('app-search'),
      isSelected: currentItem === 'app-search',
    },
    {
      id: 'workplace-search',
      name: 'Workplace Search',
      onClick: () => setCurrentItem('workplace-search'),
      isSelected: currentItem === 'workplace-search',
    },
  ]
  return (
    <EuiSideNav
      heading="Enterprise Search"
      items={items}
    />
  )
}
