export default function Page() {
  return (
    <div>
      <link
        rel='foo' // The rule only checks for rel='stylesheet' :)
        href='/style.css'
      />
      <link
        rel='stylesheet'
        href='https://example.org/style.css' // Loading external links is OK.
      />
    </div>
  )
}
