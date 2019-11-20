import { createServer } from 'http'

export const serveContent = (content: string) => {
  createServer((_reqest, response) => {
    response.setHeader('Content-Length', content.length)
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200
    response.end(content)
  })
}
