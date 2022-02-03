import Link from 'next/link'

const CustomLink = ({...props}) => (
  <a {...props} rel='noreferrer' />
)

export const Component = () => (
  <>
    <Link passHref href='/foo'>
      <CustomLink>custom</CustomLink>
    </Link>
    <Link href='/foo'>
      <a>classic</a>
    </Link>
  </>
)
