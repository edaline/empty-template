const wappalyzer = require('simple-wappalyzer')
const getHTML = require('html-get')
//Fix user-agent just in case

const createBrowserless = require('browserless')

// Spawn Chromium process once
const browserlessFactory = createBrowserless()

// Kill the process when Node.js exit
process.on('exit', () => {
  console.log('closing resources!')
  browserlessFactory.close()
})

const getContent = async url => {
  // create a browser context inside Chromium process
  const browserContext = browserlessFactory.createContext()
  const getBrowserless = () => browserContext
  const result = await getHTML(url, { getBrowserless }).then(({ url, html, statusCode, headers }) =>
  wappalyzer({ url, html, statusCode, headers })
)
.then(result => console.log(result))
  // close the browser context after it's used
  await getBrowserless((browser) => browser.destroyContext())
  return result
}

getContent('https://example.com')
  .then(content => {
    console.log(content)
    process.exit()
  })
  .catch(error => {
    console.error(error)
    process.exit(1)
  })