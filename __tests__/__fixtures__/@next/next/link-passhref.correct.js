import Link from 'next/link'

function CustomLink({...props}) {
  return (
    <a {...props} rel='noreferrer' />
  )
}

export default function Component() {
  return (
    <>
      <Link passHref href='/foo'>
        <CustomLink>custom</CustomLink>
      </Link>
      <Link href='/foo'>
        <a>classic</a>
      </Link>
    </>
  )
}
