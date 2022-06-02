import { useState } from 'react';
import { EuiPageTemplate, EuiSpacer } from '@elastic/eui';

import { FlexExample, Flyout, SideNav, Table } from './components';

export const Home:React.FC = () => {
  const [currentTab, setCurrentTab] = useState('1')
  const tabs = [
    {
      id: '1',
      label: '🏸 Bodacious Badminton',
      isSelected: currentTab === '1',
      onClick: () => setCurrentTab('1'),
      image: 'https://static.bangkokpost.com/media/content/20211219/c1_2234443.jpg',
    },
    {
      id: '2',
      label: '🏏 Curmudgeony Cricket',
      isSelected: currentTab === '2',
      onClick: () => setCurrentTab('2'),
      image: 'https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg'
    },
    {
      id: '3',
      label: '🥍 Ludicrous Lacrosse',
      isSelected: currentTab === '3',
      onClick: () => setCurrentTab('3'),
      image: 'https://cdn.images.insidelacrosse.com/auto/0618/5b337fb842728/900x600/5b337fb842728.jpg'
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
      <img height={320} src={tabs[Number(currentTab) - 1].image} alt={tabs[Number(currentTab) - 1].label} />
      <FlexExample />
      <EuiSpacer />
      <Table />
    </EuiPageTemplate>
  )
}
