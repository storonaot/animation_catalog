const cropper = (text, length) =>
  (text.length > length ? `${text.substring(0, length - 3)}...` : text)

export default cropper
