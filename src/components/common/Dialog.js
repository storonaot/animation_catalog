import DialogMUI from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

type Props = {
  children: Object,
  title: string,
  showed: boolean,
  onClose: Function,
  onSuccess?: Function,
  modal?: boolean,
  actions?: Array,
}

const Dialog = ({
  children,
  title,
  showed,
  onClose,
  onSuccess,
  modal,
  actions
}: Props) => {
  const Actions = actions || [
    <FlatButton label="Сохранить" secondary onClick={onSuccess} />
  ]
  return (
    <DialogMUI
      title={title}
      actions={Actions}
      modal={modal}
      open={showed}
      onRequestClose={onClose}
    >
      {children}
    </DialogMUI>
  )
}

Dialog.defaultProps = {
  modal: true,
  onSuccess: () => {}
}

export default Dialog
