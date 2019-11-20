import { readFile } from 'fs'
import { createServer } from 'http'

export const serveFile = (file: string) => {
    createServer((_reqest, response) => {
        readFile(file, (_error, content) => {
            response.setHeader("Content-Length", content.length)
            response.setHeader("Content-Type", "text/html")
            response.statusCode = 200
            response.end(content)
        })
    })
}