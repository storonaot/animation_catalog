import { Component } from 'react'
import { BASE_URL } from 'constants/api'
import Dropzone from 'react-dropzone'
import IconButton from 'material-ui/IconButton'
import ContentClear from 'material-ui/svg-icons/content/clear'

type Props = {
  input: Object<{ onChange: Function }>,
  onRemove?: Function,
}

class ImageUpload extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleImageUpload = this.handleImageUpload.bind(this)
    this.removeImage = this.removeImage.bind(this)
  }

  getImgUrl() {
    const { input: { value } } = this.props

    console.log('value', value)

    return value && value.filename ? `${BASE_URL}/${value.path}` : value.preview
  }

  handleImageUpload(files) {
    const { onChange } = this.props.input
    const file = files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      onChange(file)
    }
    reader.readAsDataURL(file)
  }

  removeImage() {
    const { input: { onChange }, onRemove } = this.props

    if (onRemove) onRemove()
    else onChange(null)
  }

  render() {
    console.log('render', this.props)

    const imageUrl = this.getImgUrl()

    const previewStyle = {
      backgroundImage: imageUrl ? `url(${imageUrl})` : null,
      width: '100%',
      height: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    }

    const dropzoneStyle = {
      width: '100%',
      height: '100%',
      border: '2px dashed #000',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    const dropzoneActiveStyle = {
      backgroundColor: '#e0dede',
      border: '2px solid #afd43c'
    }

    const dropzoneRejectStyle = {
      backgroundColor: '#ec6f53',
      border: '2px solid #ec6f53'
    }

    return (
      <div style={{ width: '100%', height: '100%' }}>
        {!imageUrl &&
          <Dropzone
            onDrop={this.handleImageUpload}
            accept="image/*"
            multiple={false}
            style={dropzoneStyle}
            activeStyle={dropzoneActiveStyle}
            rejectStyle={dropzoneRejectStyle}
          >
            Перетащите изображение
          </Dropzone>}
        {imageUrl &&
          <div style={previewStyle}>
            <IconButton
              style={{
                right: 0,
                position: 'absolute',
                padding: 0,
                width: 30,
                height: 30
              }}
              iconStyle={{ width: 30, height: 30 }}
              onClick={this.removeImage}
            >
              <ContentClear color="#ec6f53" hoverColor="#f01" />
            </IconButton>
          </div>}
      </div>
    )
  }
}

export default ImageUpload
