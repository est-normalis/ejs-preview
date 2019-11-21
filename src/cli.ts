import program from 'commander'
import { existsSync, readFileSync } from 'fs'
import { previewTemplate } from './index'

const readAndParse = (path: string): object => {
    const file = readFileSync(path, 'utf-8')
    return JSON.parse(file)
}

const readVariablesFile = (variablesPath: string): object => {
    if (existsSync(variablesPath)) {
        return readAndParse(variablesPath)
    }
    const filePathWithJsonExtension = `${variablesPath}.json`
    if (existsSync(filePathWithJsonExtension)) {
        return readAndParse(filePathWithJsonExtension)
    }

    throw new Error('Variables files was specified but cannot be found')
}

const startPreview = ({templatePath, port, host, variablesFile}: PreviewOptions): void => {
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

program
    .arguments('<template> [variablesFile]')
    .description(`Starts a live server from selected ejs template,
    passing to it variables file if its specified`)
    .option('-p, --port', 'specify server port')
    .option('-b, -h, --host', 'change server hostname')
    .option('-m, --mime', 'specify mime type')
    .action((template, variables) => {
        startPreview({
            templatePath: template,
            variablesFile: variables,
            ...program.opts()
        })
    })


program.parse(process.argv)

interface PreviewOptions {
    templatePath: string
    port?: number | string
    host?: string
    variablesFile?: string
}