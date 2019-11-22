import { createServer, Server } from 'http'

const createWebserver = (content: string, mimeType: string): Server => {
  return createServer((_reqest, response) => {
    response.setHeader('Content-Length', content.length)
    response.setHeader('Content-Type', mimeType)
    response.statusCode = 200
    response.end(content)
  })
}

export default createWebserver
