import { previewTemplate } from '../index'
import { readVariablesFile } from './fileHelpers'

export const startPreview = ({templatePath, port, host, variablesFile}: PreviewOptions): void => {
    let variables = {}
    if (variablesFile) {
        variables = readVariablesFile(variablesFile)
    }

    previewTemplate({
        templatePath,
        port: port || 9999,
        url: host || 'localhost',
        variables
    })
}


export interface PreviewOptions {
    templatePath: string
    port?: number | string
    host?: string
    variablesFile?: string
}