export default function Head() {
  return (
    <>
      <title>Shell Consultancy</title>
      <meta name="description" content="Vedvix.in" />
      
      {/* CSP META TAG TO ALLOW CLOUDFLARE */}
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self' https://static.cloudflareinsights.com;"
      />
      
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}