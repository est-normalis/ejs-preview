import { render as renderEJS } from 'ejs'
import { readFileSync } from 'fs'

const render = (templatePath: string, variables: any = {}) => {
  const template = readFileSync(templatePath, 'utf-8')
  return renderEJS(template, variables)
}

export default render
