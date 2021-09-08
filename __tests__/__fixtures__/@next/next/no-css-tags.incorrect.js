/* eslint-disable @next/next/no-document-import-in-page */

import Document, {Head} from 'next/document'

export default class Doc extends Document {
  render() {
    return (
      <Head>
        <link rel='stylesheet' href='/style.css' />
      </Head>
    )
  }
}
