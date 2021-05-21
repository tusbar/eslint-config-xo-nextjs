import Link from 'next/link'

function CustomLink({...props}) {
  return (
    <a {...props} rel='noreferrer' />
  )
}

export default function Component() {
  return (
    <Link href='/foo'>
      <CustomLink>custom</CustomLink>
    </Link>
  )
}
