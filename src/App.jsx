import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductDetails from './component/ProductDetails'
import { Helmet } from 'react-helmet'

function App() {
  const [count, setCount] = useState(0)
  const shareUrl = 'https://www.pakkamarwadi.tk/';
  return (
    <>
      <h1>I hope you like it</h1>
    <Helmet>
        <title>Hello world</title>
        <meta property="og:title" content={"Hello world"} />
        <meta name="description" content={"Hello worldHello worldHello worldHello worldHello worldHello world"} />
        <meta property="og:image" content={"https://fastly.picsum.photos/id/531/1200/630.jpg?hmac=QXkvOlO4IS8lK8Rn5sPMxW5Cd24iDqTY6PNTAefsjmY"} />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content={"Hello world"} />
      </Helmet>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ProductDetails></ProductDetails>
    </>
  )
}

export default App
