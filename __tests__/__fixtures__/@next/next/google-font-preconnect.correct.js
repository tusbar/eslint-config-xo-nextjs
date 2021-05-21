import Document, {Head} from 'next/document'

export default class Doc extends Document {
  render() {
    return (
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' />
      </Head>
    )
  }
}
