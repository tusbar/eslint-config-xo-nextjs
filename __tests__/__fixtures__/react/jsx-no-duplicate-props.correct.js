import PropTypes from 'prop-types'

// This component mimics MUI’s TextField
// https://material-ui.com/api/text-field/
function TextField({inputProps, InputProps}) {
  return (
    <div {...InputProps}>
      <input {...inputProps} />
    </div>
  )
}

TextField.propTypes = {inputProps: PropTypes.object, InputProps: PropTypes.object}

export default function App() {
  return (
    <TextField
      InputProps={{className: 'div'}}
      inputProps={{className: 'input'}}
    />
  )
}
