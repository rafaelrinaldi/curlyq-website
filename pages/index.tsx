import { useState, useEffect } from 'react'
import Head from 'next/head'
import { write as copyToClipboard } from 'clipboardy'
import { curlyq } from '@rafaelrinaldi/curlyq'

export default function Home () {
  const [smartQuotes, setSmartQuotes] = useState(false)
  const [formatted, setFormatted] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    if (!process.browser) return

    import('webfontloader').then(WebFont => {
      WebFont.load({
        google: {
          families: ['Domine']
        }
      })
    })
  }, [])

  useEffect(() => {
    setFormatted(curlyq(text))
  }, [text])

  return (
    <>
      <style jsx global>{`
        :root {
          --color-dark: #0a0a0a;
          --color-light: #fff;
          --color-primary: var(--color-dark);
          --color-secondary: var(--color-light);
          --radix: 3px;
        }

        ::-moz-selection {
          background-color: var(--color-primary);
          color: var(--color-secondary);
        }

        ::selection {
          background-color: var(--color-primary);
          color: var(--color-secondary);
        }

        *:not(:disabled):focus {
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(237, 240, 242, 0.8);
        }

        html,
        body {
          width: 100%;
          height: 100%;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
            'Helvetica Neue', sans-serif;
          color: var(--color-primary);
          background-color: var(--color-secondary);
          padding: 0;
          margin: 0;
        }

        a {
          color: currentColor;
          text-decoration: none;
        }

        button {
          color: currentColor;
          background-color: transparent;
          border: 0;
          padding: 0;
          font-size: inherit;
        }

        textarea {
          box-sizing: border-box;
          display: block;
          font-size: 100%;
          font-family: inherit;
          color: var(--color-dark);
          border-radius: var(--radix);
          padding: 1rem;
          border: 1px solid;
        }

        textarea[readonly] {
          cursor: not-allowed;
        }

        textarea::selection {
          color: var(--color-light);
          background-color: var(--color-dark);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --color-primary: var(--color-light);
            --color-secondary: var(--color-dark);
          }
        }
      `}</style>

      <style jsx>{`
        h1 {
          margin-bottom: 0;
        }

        p {
          margin-top: 0.5rem;
          white-space: nowrap;
        }

        a:hover {
          text-decoration: underline;
        }

        main {
          width: 100%;
          height: 100vh;
        }

        section {
          padding: 0 2rem;
        }

        textarea {
          width: 100%;
          min-height: 30vh;
          resize: none;
        }

        button {
          color: var(--color-secondary);
          background-color: var(--color-primary);
          min-width: 11rem;
          text-align: center;
          user-select: none;
          font-size: 1rem;
          border-radius: var(--radix);
          padding: 0.75rem 1rem;
          border: 1px solid transparent;
        }

        button:hover {
          color: var(--color-primary);
          background-color: var(--color-secondary);
          border-color: currentColor;
        }

        .spacer-x {
          padding-left: 0.25rem;
          padding-right: 0.25rem;
        }

        .spacer-y {
          padding-bottom: 1.5rem;
        }

        .quote {
          display: inline-block;
          position: relative;
          font-family: Domine, serif;
          font-size: 1.65rem;
          transform: translateY(0.5rem);
          padding: 0 0.15rem;
        }

        label {
          user-select: none;
          padding-top: 1.5rem;
          padding-right: 1.5rem;
          padding-bottom: 1.5rem;
          display: inline-flex;
        }

        .logo {
          display: block;
          width: 1.25rem;
          padding-right: 2rem;
        }

        header,
        footer {
          position: absolute;
          left: 2rem;
        }

        header {
          top: 2rem;
        }

        footer {
          bottom: 2rem;
        }

        @media screen and (max-width: 40em) {
          main {
            padding-top: 5rem;
          }

          button {
            min-width: 100%;
          }
        }

        @media screen and (min-width: 40em) {
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }

        @media screen and (min-width: 90em) {
          textarea {
            min-width: 40vw;
          }
        }
      `}</style>

      <header>
        <a className='logo' href='https://rinaldi.io'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19 12'>
            <title>Rafael Rinaldi</title>
            <g fillRule='nonzero' style={{ fill: 'currentColor' }}>
              <path d='M3.04 12V7.84h1.84L6.928 12h2.384L7.008 7.68a3.286 3.286 0 001.768-1.208c.443-.592.664-1.31.664-2.152 0-.704-.152-1.32-.456-1.848A3.192 3.192 0 007.72 1.24C7.181.947 6.56.8 5.856.8H.928V12H3.04zm2.608-6.064H3.04V2.72h2.608c.501 0 .907.144 1.216.432.31.288.464.677.464 1.168 0 .49-.155.883-.464 1.176-.31.293-.715.44-1.216.44zM12.04 12V7.84h1.84L15.928 12h2.384l-2.304-4.32a3.286 3.286 0 001.768-1.208c.443-.592.664-1.31.664-2.152 0-.704-.152-1.32-.456-1.848A3.192 3.192 0 0016.72 1.24C16.181.947 15.56.8 14.856.8H9.928V12h2.112zm2.608-6.064H12.04V2.72h2.608c.501 0 .907.144 1.216.432.31.288.464.677.464 1.168 0 .49-.155.883-.464 1.176-.31.293-.715.44-1.216.44z' />
            </g>
          </svg>
        </a>
      </header>
      <main>
        <section>
          <h1>curlyq</h1>
          <p>
            Convert straight quotes (<span className='quote'>'</span> and{' '}
            <span className='quote'>"</span>) to smart quotes (
            <span className='quote'>’</span> and{' '}
            <span className='quote'>”</span>)
          </p>
          <div className='spacer-y' />
          <textarea
            readOnly={smartQuotes}
            value={smartQuotes ? formatted : text}
            placeholder='Type in here'
            onChange={event => setText(event.target.value)}
          />
          <div className='spacer-y' />
          <form onSubmit={event => event.preventDefault()}>
            <label>
              <input
                type='checkbox'
                checked={smartQuotes}
                onChange={() => setSmartQuotes(!smartQuotes)}
              />
              <span className='spacer-x' />
              Smart quotes
            </label>

            <button
              onClick={async () => {
                const contents: string = smartQuotes ? formatted : text
                await copyToClipboard(contents)
                alert('Copied to clipboard!')
              }}
            >
              Copy to clipboard
            </button>
          </form>
        </section>
      </main>

      <footer>
        <a href='https://github.com/rafaelrinaldi/curlyq'>Source</a>
      </footer>
    </>
  )
}
