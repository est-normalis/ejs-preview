import { previewTemplate } from '../index'
import { readVariablesFile } from './fileHelpers'

export const startPreview = ({
  templatePath,
  port,
  host,
  variablesFile,
  mime
}: PreviewOptions): void => {
  let variables = {}
  if (variablesFile) {
    variables = readVariablesFile(variablesFile)
  }

  try {
    previewTemplate({
      templatePath,
      port: port || 9999,
      url: host || 'localhost',
      variables,
      mimeType: mime || 'text/html'
    })
  }
  catch (e) {
    console.error(`${e}`)
    process.exit(1)
  }
}

export interface PreviewOptions {
  templatePath: string
  port?: number | string
  host?: string
  variablesFile?: string
  mime?: string
}
