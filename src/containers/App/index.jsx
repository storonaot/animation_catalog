import { connect } from 'react-redux'
import toggleSidebar from 'store/actions/ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import { withRouter } from 'react-router'
import history from 'utils/history'

const App = ({ children, sidebarOpened, onToggleSidebar }) => (
  <MuiThemeProvider>
    <div>
      <Sidebar opened={sidebarOpened} closeSidebar={onToggleSidebar} />
      <Header
        openSidebar={onToggleSidebar}
        goHome={() => {
          history.push('/')
        }}
      />
      {children}
    </div>
  </MuiThemeProvider>
)

const mapStateToProps = state => ({
  sidebarOpened: state.ui.sidebarOpened,
  val: state.user.val
})
const mapDispatchToProps = dispatch => ({
  onToggleSidebar: () => {
    dispatch(toggleSidebar())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

App.defaultProps = {
  children: null
}

App.propTypes = {
  children: PropTypes.node,
  sidebarOpened: PropTypes.bool.isRequired,
  onToggleSidebar: PropTypes.func.isRequired
}
