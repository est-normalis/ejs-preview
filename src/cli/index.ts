import program from 'commander'
import { startPreview } from './preview'

program
  .arguments('<template> [variablesFile]')
  .description(
    `Starts a live server from selected ejs template,
    passing to it variables file if its specified`
  )
  .option('-p, --port <port>', 'specify server port')
  .option('-h, --host <host>', 'change server hostname')
  .option('-m, --mime <mime>', 'specify mime type')
  .action((template, variables) => {
    if (!template) {
      console.log('Template file must be specified')
      process.exit(2)
    }

    startPreview({
      templatePath: template,
      variablesFile: variables,
      ...program.opts()
    })
  })

if (process.argv.length < 3) {
  console.log('Error: ejs-preview requires argument with ejs file address. Usage:')
  console.log('\x1b[33m%s\x1b[0m', '  ejs-preview <template> [variablesFile]')
  console.log('For more information read README.md file.')
}
program.parse(process.argv)

