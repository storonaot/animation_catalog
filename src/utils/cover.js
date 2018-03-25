import { BASE_URL } from 'constants/api'

const noImage = require('images/no-image.jpg')

const getCover = cover => (cover ? `${BASE_URL}/${cover.path}` : noImage)

export default getCover
