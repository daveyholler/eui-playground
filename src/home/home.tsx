import { EuiPageTemplate } from '@elastic/eui';

import { PeopleTable, SideNav } from './components';

export const Home: React.FC = () => {
  return (
    <EuiPageTemplate
      pageSideBar={<SideNav />}
      pageHeader={{
        pageTitle: "Welcome to Enterprise Search",
        iconType: 'logoEnterpriseSearch',
      }}
    >
      <PeopleTable />
    </EuiPageTemplate>
  )
}
