import { connect } from 'react-redux'
import { closeConfirmDialog } from 'store/actions/ui'

import DialogMUI from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

type Props = {
  dialog: Object<{
    onClose: Function,
    showed: boolean,
    message?: string,
    title?: string,
    onSuccess: Function,
  }>,
  onClose: Function,
}

const ConfirmDialog = ({
  onClose,
  dialog: { showed, message, title, onSuccess }
}: Props) => {
  const successWithClose = () => {
    onSuccess()
    onClose()
  }
  const actions = [
    <FlatButton label="Отмена" primary onClick={onClose} />,
    <FlatButton label="Продолжить" secondary onClick={successWithClose} />
  ]

  return (
    <DialogMUI
      title={title}
      actions={actions}
      modal={false}
      open={showed}
      onRequestClose={onClose}
    >
      {message}
    </DialogMUI>
  )
}

const mapStateToProps = state => ({
  dialog: state.ui.dialog
})
const mapDispatchToProps = dispatch => ({
  onClose: () => {
    dispatch(closeConfirmDialog())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDialog)
