/* eslint-disable @next/next/no-document-import-in-page, @next/next/no-page-custom-font */

import NextDocument, {Head} from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Head>
        <link rel='help' href='https://fonts.gstatic.com' />
        <link rel='license' href='https://fonts.gstatic.com' />
        <link href='https://fonts.gstatic.com' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' />
      </Head>
    )
  }
}
