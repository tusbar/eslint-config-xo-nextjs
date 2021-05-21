import Document, {Head} from 'next/document'

const path = '/style.css'

export default class Doc extends Document {
  render() {
    return (
      <Head>
        <link
          rel='foo' // The rule only checks for rel='stylesheet'
          href='/style.css'
        />
        <link
          rel='stylesheet'
          href={path} // The rule only checks Literals
        />
      </Head>
    )
  }
}
