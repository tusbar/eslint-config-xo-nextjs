// This component mimics MUI’s TextField
// https://material-ui.com/api/text-field/
const TextField = ({inputProps, InputProps}) => (
  <div {...InputProps}>
    <input {...inputProps} />
  </div>
)

export const App = () => (
  <TextField
    InputProps={{className: 'div'}}
    inputProps={{className: 'input'}}
  />
)
