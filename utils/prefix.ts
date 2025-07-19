export function withBasePath(path: string) {
  const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost'

  const basePath = isLocal ? '' : '/shellConsultancy2'

  return `${basePath}${path}`
}
