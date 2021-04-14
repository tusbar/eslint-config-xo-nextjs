export default function Page() {
  const path = '/style.css'

  return (
    <div>
      <link
        rel='foo' // The rule only checks for rel='stylesheet'
        href='/style.css'
      />
      <link
        rel='stylesheet'
        href={path} // The rule only checks Literals
      />
    </div>
  )
}
