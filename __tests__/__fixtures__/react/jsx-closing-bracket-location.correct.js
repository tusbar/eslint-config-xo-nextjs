export default function Component() {
  return (
    <div className='same-line' style={{newLine: true}}>
      <small className='small' />

      <span
        className='long-line'
        style={{
          fontWeight: 'bold'
        }}
      />
    </div>
  )
}
