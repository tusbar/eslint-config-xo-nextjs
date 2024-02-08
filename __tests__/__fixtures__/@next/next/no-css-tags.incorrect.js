/* eslint-disable @next/next/no-document-import-in-page */

import NextDocument, {Head} from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Head>
        <link rel='stylesheet' href='/style.css' />
      </Head>
    )
  }
}
