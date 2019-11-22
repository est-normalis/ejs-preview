import render from './render'
import webserver from './webserver'

export const previewTemplate = (opts: PreviewConfig) => {
  const config = Object.assign(defaultConfig, opts)
  const template = render(config.templatePath, config.variables)
  const server = webserver(template, config.mimeType)

  console.log(
    '\x1b[36m%s\x1b[0m',
    `Starting ejs-preview server on address: ${config.url}:${config.port}`
  )
  server.listen(config.port, config.url)
}

const defaultConfig = {
  variables: {},
  url: '127.0.0.1',
  port: 9999,
  mimeType: 'text/html'
}

export interface PreviewConfig {
  templatePath: string
  variables?: any
  url?: string
  port?: any
  mimeType?: string
}
