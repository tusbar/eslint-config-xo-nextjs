import PropTypes from 'prop-types'

// This component mimics react-intl’s FormattedNumber
// https://formatjs.io/docs/react-intl/components/#formattednumber
const FormattedNumber = ({value, style}) => (
  <div>
    {value} written in the style {style}
  </div>
)

FormattedNumber.propTypes = {value: PropTypes.number, style: PropTypes.string}

export const App = () => (
  <FormattedNumber value={0.42} style='percentage' />
)
