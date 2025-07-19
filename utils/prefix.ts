export function withBasePath(path: string) {
  const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost'

  const basePath = isLocal ? '' : ''

  return `${basePath}${path}`
}
