/* eslint-disable @next/next/no-document-import-in-page, @next/next/no-page-custom-font */

import NextDocument, {Head} from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat&display=block' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat&display=auto' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat&display=fallback' />
      </Head>
    )
  }
}
