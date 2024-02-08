/* eslint-disable @next/next/no-document-import-in-page */

import NextDocument, {Head} from 'next/document'

const path = '/style.css'

export default class Document extends NextDocument {
  render() {
    return (
      <Head>
        <link
          rel='canonical' // The rule only checks for rel='stylesheet'
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
