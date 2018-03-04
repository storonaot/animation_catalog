import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import styled, { css } from 'styled-components'

import RaisedButton from 'material-ui/RaisedButton'
import { TextField, AutoComplete } from 'components/common'

type Props = {
  formType: string,
  initialize: Function,
  initialValues?: Object,
  handleSubmit: Function,
  sendData: Function,
}

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, [col] 1fr);
  grid-template-rows: repeat(4, [row] auto);
  margin-bottom: 30px;
`

const Box = styled.div`
  ${props => props.cover && css`
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  `}
  ${props => props.isName && css`
    grid-column: 2 / 3;
    grid-row: 1;
  `}
  ${props => props.originalName && css`
    grid-column: 3 / 4;
    grid-row: 1;
  `}
  ${props => props.countries && css`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  `}
  ${props => props.directors && css`
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  `}
  ${props => props.studios && css`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  `}
  ${props => props.description && css`
    grid-column: 2 / 4;
    grid-row: 4;
  `}
`

class SerialForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { formType, initialize, initialValues } = this.props
    if (formType === 'edit') {
      initialize(initialValues)
    } else if (formType === 'new') {
      initialize()
    }
  }

  render() {
    const { handleSubmit, sendData } = this.props
    return (
      <form onSubmit={handleSubmit(sendData)}>
        <Grid>
          <Box cover><div>Cover</div></Box>
          <Box isName>
            <Field
              name="name"
              component={TextField}
              type="text"
              floatingLabelText="Название сериала"
              fullWidth
            />
          </Box>
          <Box originalName>
            <Field
              name="originalName"
              component={TextField}
              type="text"
              floatingLabelText="Оригинальное название сериала"
              fullWidth
            />
          </Box>
          <Box countries>
            <AutoComplete
              dataSource={[]}
              name="countries"
              floatingLabelText="Страны"
              fullWidth
            />
          </Box>
          <Box directors>
            <AutoComplete
              dataSource={[]}
              name="directors"
              floatingLabelText="Режиссеры"
              fullWidth
            />
          </Box>
          <Box studios>
            <AutoComplete
              dataSource={[]}
              name="studios"
              floatingLabelText="Студии"
              fullWidth
            />
          </Box>
          <Box description>
            <Field
              name="description"
              component={TextField}
              type="text"
              floatingLabelText="Описание сериала"
              multiLine
              fullWidth
            />
          </Box>
        </Grid>
        <div>
          <RaisedButton type="submit" label="Сохранить" secondary />
        </div>
      </form>
    )
  }
}

const SerialFormRedux = reduxForm({
  form: 'SerialForm',
  enableReinitialize: true
})(SerialForm)

const mapStateToProps = state => ({
  initialValues: state.serial.data
})

export default connect(mapStateToProps)(SerialFormRedux)
