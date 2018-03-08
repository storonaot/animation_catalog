import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { NavLink } from 'react-router-dom'
import { uniqueId as _uniqueId } from 'lodash'

const sidebarLinks = [
  { label: 'Home', to: '/' },
  { label: 'Serials', to: '/serials' },
  { label: 'Addition', to: '/addition' }
]

type Props = {
  opened: boolean,
  closeSidebar: Function,
}

const Sidebar = ({ opened, closeSidebar }: Props) => (
  <Drawer open={opened} onRequestChange={closeSidebar} docked={false}>
    {sidebarLinks.map(link => (
      <NavLink key={_uniqueId()} to={link.to}>
        <MenuItem onClick={closeSidebar}>{link.label}</MenuItem>
      </NavLink>
    ))}
  </Drawer>
)

export default Sidebar
