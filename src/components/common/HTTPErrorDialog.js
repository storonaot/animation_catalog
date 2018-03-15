import { connect } from 'react-redux'
import { closeHTTPErrorDialog } from 'store/actions/ui'

import DialogMUI from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

type Props = {
  dialog: Object<{
    onClose: Function,
    showed: boolean,
    message?: string,
    title?: string,
  }>,
  onClose: Function,
}

const HTTPErrorDialog = ({
  onClose,
  dialog: { code, title, showed }
}: Props) => {
  const action = <FlatButton label="Ок" primary onClick={onClose} />

  return (
    <DialogMUI
      title={title}
      actions={action}
      modal={false}
      open={showed}
      onRequestClose={onClose}
    >
      <pre>
        {code}
      </pre>
    </DialogMUI>
  )
}

const mapStateToProps = state => ({
  dialog: state.ui.HTTPErrorDialog
})
const mapDispatchToProps = dispatch => ({
  onClose: () => {
    dispatch(closeHTTPErrorDialog())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HTTPErrorDialog)
