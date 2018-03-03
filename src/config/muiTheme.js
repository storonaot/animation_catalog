import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  teal100,
  orange500,
  grey900,
  grey600,
  grey400,
  cyan500,
  grey800,
  grey300
} from 'material-ui/styles/colors'

const colors = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: grey800,
    primary2Color: cyan500,
    primary3Color: teal100,
    accent1Color: orange500,
    textColor: grey900,
    alternateTextColor: grey300,
    shadowColor: grey600,
    borderColor: grey400
  }
}

const muiTheme = () => getMuiTheme(colors)

export default muiTheme
