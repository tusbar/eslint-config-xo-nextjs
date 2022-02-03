import Link from 'next/link'

const CustomLink = ({...props}) => (
  <a {...props} rel='noreferrer' />
)

export const Component = () => (
  <Link href='/foo'>
    <CustomLink>custom</CustomLink>
  </Link>
)
