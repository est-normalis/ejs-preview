import render from './render'
import webserver from './webserver'

const previewTemplate = (opts: PreviewConfig) => {
  const config = Object.assign(defaultConfig, opts)
  const template = render(config.templatePath, config.variables)
  const server = webserver(template, config.mimeType)
  server.listen(config.port, config.url)
}

const defaultConfig = {
  variables: {},
  url: '127.0.0.1',
  port: 9999,
  mimeType: 'text/html'
}

interface PreviewConfig {
  templatePath: string
  variables?: any
  url?: string
  port?: any
  mimeType?: string
}

export default previewTemplate