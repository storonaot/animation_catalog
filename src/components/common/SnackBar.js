import { connect } from 'react-redux'
import SnackbarMUI from 'material-ui/Snackbar'

type Props = {
  snackbar: Object<{ showed: boolean, message: string }>,
  autoHideDuration: number,
}

const SnackBar = ({
  snackbar: { showed, message },
  autoHideDuration
}: Props) => (
  <SnackbarMUI
    open={showed}
    message={message}
    autoHideDuration={autoHideDuration}
  />
)

SnackBar.defaultProps = {
  autoHideDuration: 4000
}

const mapStateToProps = state => ({
  snackbar: state.ui.snackbar
})

export default connect(mapStateToProps)(SnackBar)
