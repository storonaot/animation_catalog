import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { NavLink } from 'react-router-dom'
import { uniqueId as _uniqueId } from 'lodash'

const sidebarLinks = [
  { label: 'Home', to: '/' },
  { label: 'Serials', to: '/serials' }
]

const Sidebar = ({ opened, closeSidebar }) => (
  <Drawer open={opened} onRequestChange={closeSidebar} docked={false}>
    {sidebarLinks.map(link => (
      <NavLink key={_uniqueId()} to={link.to}>
        <MenuItem onClick={closeSidebar}>{link.label}</MenuItem>
      </NavLink>
    ))}
  </Drawer>
)

export default Sidebar

Sidebar.defaultProps = {
  opened: false
}

Sidebar.propTypes = {
  opened: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired
}
