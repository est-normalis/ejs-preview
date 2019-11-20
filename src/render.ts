import { render as renderEJS } from 'ejs'
import { existsSync, readFileSync } from 'fs'

const render = (templatePath: string, variables: any = {}) => {
  if (!checkIfFileExists(templatePath)) {
    throw new Error('File does not exist')
  }

  const template = readFileSync(templatePath, 'utf-8')
  return renderEJS(template, variables)
}

const checkIfFileExists = (filePath: string): boolean => {
  return !!existsSync(filePath)
}

export default render
