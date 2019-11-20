import { createServer } from 'http'

export const serveContent = (
  content: string,
  mimeType: string = 'text/html'
) => {
  createServer((_reqest, response) => {
    response.setHeader('Content-Length', content.length)
    response.setHeader('Content-Type', mimeType)
    response.statusCode = 200
    response.end(content)
  })
}
