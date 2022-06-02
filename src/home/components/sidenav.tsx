import { EuiSideNav } from '@elastic/eui';

export const SideNav:React.FC = () => {
  const items = [
    {
      name: 'Gator Golf',
      id: 'gator-golf',
    },
    {
      name: 'Rowdy Rugby',
      id: 'rowdy-rugby'
    }
  ]
  return (
    <EuiSideNav
      heading="Real Cool Sports"
      style={{ width: 240 }}
      items={items}
    />
  )
}
