import DialogMUI from 'material-ui/Dialog'

type Props = {
  children: Object | string,
  title?: string,
  showed: boolean,
  onClose: Function,
  modal?: boolean,
  actions?: Array,
}

const Dialog = ({
  children,
  title,
  showed,
  onClose,
  modal,
  actions
}: Props) => (
  <DialogMUI
    title={title}
    actions={actions}
    modal={modal}
    open={showed}
    onRequestClose={onClose}
  >
    {children}
  </DialogMUI>
)

Dialog.defaultProps = {
  modal: false
}

export default Dialog
