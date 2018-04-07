import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const AuthControl = props => <FlatButton {...props} />
AuthControl.muiName = 'FlatButton'

const titleStyle = {
  cursor: 'pointer'
}

const Header = ({ logged, openSidebar, goHome }) => (
  <AppBar
    title="Animation Catalog"
    onLeftIconButtonClick={openSidebar}
    iconElementRight={
      logged ? <AuthControl label="LogOut" /> : <AuthControl label="LogIn" />
    }
    onTitleClick={goHome}
    titleStyle={titleStyle}
  />
)

export default Header

Header.defaultProps = {
  logged: false
}

Header.propTypes = {
  logged: PropTypes.bool,
  openSidebar: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired
}
