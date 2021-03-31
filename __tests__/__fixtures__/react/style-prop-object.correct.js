import PropTypes from 'prop-types'

// This component mimics react-intl’s FormattedNumber
// https://formatjs.io/docs/react-intl/components/#formattednumber
function FormattedNumber({value, style}) {
  return (
    <div>
      {value} written in the style {style}
    </div>
  )
}

FormattedNumber.propTypes = {value: PropTypes.number, style: PropTypes.string}

export default function App() {
  return (
    <FormattedNumber value={0.42} style='percentage' />
  )
}
