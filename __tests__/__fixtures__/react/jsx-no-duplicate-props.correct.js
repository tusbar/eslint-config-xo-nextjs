import PropTypes from 'prop-types'

// This component mimics MUI’s TextField
// https://material-ui.com/api/text-field/
const TextField = ({inputProps, InputProps}) => (
  <div {...InputProps}>
    <input {...inputProps} />
  </div>
)

TextField.propTypes = {
  inputProps: PropTypes.object.isRequired,
  InputProps: PropTypes.object.isRequired,
}

export const App = () => (
  <TextField
    InputProps={{className: 'div'}}
    inputProps={{className: 'input'}}
  />
)
