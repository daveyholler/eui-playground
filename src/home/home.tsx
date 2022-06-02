import { useState } from 'react';
import { EuiPageTemplate, EuiSpacer } from '@elastic/eui';

import { FlexExample, SideNav, Table } from './components';

export const Home:React.FC = () => {
  const [currentTab, setCurrentTab] = useState('1')
  const tabs = [
    {
      id: '1',
      label: '🏸 Bodacious Badminton',
      isSelected: currentTab === '1',
      onClick: () => setCurrentTab('1')
    },
    {
      id: '2',
      label: '🏏 Curmudgeony Cricket',
      isSelected: currentTab === '2',
      onClick: () => setCurrentTab('2')
    },
    {
      id: '3',
      label: '🥍 Luscious Lacrosse',
      isSelected: currentTab === '3',
      onClick: () => setCurrentTab('3')
    }
  ]

  return (
    <EuiPageTemplate
      pageSideBar={<SideNav />}
      pageHeader={{
        iconType: "logoSecurity",
        pageTitle: 'Pretty Page, Pal',
        tabs: tabs
      }}
    >
      <FlexExample />
      <EuiSpacer />
      <Table />
    </EuiPageTemplate>
  )
}
