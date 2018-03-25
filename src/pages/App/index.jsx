import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import history from 'libs/history'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import muiTheme from 'config/muiTheme'

import { toggleSidebar } from 'store/actions/ui'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import {
  Container,
  ConfirmDialog,
  SnackBar,
  HTTPErrorDialog
} from 'components/common'

import './styles.sss'

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
      {dataLoading && <div>Loading data...</div>}
      {!dataLoading &&
        <Container>
          {children}
        </Container>}
      <ConfirmDialog />
      <HTTPErrorDialog />
      <SnackBar />
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
