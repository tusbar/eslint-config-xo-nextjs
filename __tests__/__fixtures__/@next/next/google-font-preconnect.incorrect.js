/* eslint-disable @next/next/no-document-import-in-page */

import Document, {Head} from 'next/document'

export default class Doc extends Document {
  render() {
    return (
      <Head>
        <link rel='something' href='https://fonts.gstatic.com' />
        <link rel='preconnected' href='https://fonts.gstatic.com' />
        <link href='https://fonts.gstatic.com' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' />
      </Head>
    )
  }
}
