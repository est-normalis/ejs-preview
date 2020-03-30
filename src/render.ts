import { render as renderEJS } from 'ejs'
import { existsSync, readFileSync } from 'fs'

const render = (templatePath: string, variables: any = {}) => {
  if (!existsSync(templatePath)) {
    throw new Error('File does not exist')
  }

  const template = readFileSync(templatePath, 'utf-8')
  return renderEJS(template, variables)
}

export default render
