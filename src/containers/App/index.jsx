import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import history from 'utils/history'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import muiTheme from 'config/muiTheme'

import { toggleSidebar } from 'store/actions/ui'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Container from 'components/common'

import { Link } from 'react-router-dom'

import './styles.css'

type Props = {
  dataLoading: boolean,
  children: Object,
  sidebarOpened: boolean,
  onToggleSidebar: Function,
}

const App = ({
  dataLoading,
  children,
  sidebarOpened,
  onToggleSidebar
}: Props) => (
  <MuiThemeProvider muiTheme={muiTheme()}>
    <div>
      <Sidebar opened={sidebarOpened} closeSidebar={onToggleSidebar} />
      <Header
        openSidebar={onToggleSidebar}
        goHome={() => {
          history.push('/')
        }}
      />
      <Link to="/">Home</Link>
      <Link to="/serials">Serials</Link>
      {dataLoading && <div>Loading data...</div>}
      <Container>
        {children}
      </Container>
    </div>
  </MuiThemeProvider>
)

const mapStateToProps = state => ({
  sidebarOpened: state.ui.sidebarOpened,
  dataLoading: state.ui.dataLoading
})
const mapDispatchToProps = dispatch => ({
  onToggleSidebar: () => {
    dispatch(toggleSidebar())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
