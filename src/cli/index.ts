import program from 'commander'
import { startPreview } from './preview'

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
