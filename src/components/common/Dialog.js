import { connect } from 'react-redux'

import { closeDialog } from 'store/actions/ui'

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

const Dialog = ({
  onClose,
  dialog: { showed, message, title, onSuccess }
}: Props) => {
  const successWithClose = () => {
    onSuccess()
    onClose()
  }
  const actions = [
    <FlatButton label="Cancel" primary onClick={onClose} />,
    <FlatButton label="Submit" secondary onClick={successWithClose} />
  ]

  console.log('onSuccess', onSuccess)

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
    dispatch(closeDialog())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)
