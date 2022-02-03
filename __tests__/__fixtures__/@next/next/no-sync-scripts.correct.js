export const Page = () => (
  <div>
    <script defer src='/script.js' />
    <script async src='/script.js' />
    <script async defer src='https://example.org/script.js' />
    <script>{'console.log("hi")'}</script>
  </div>
)
