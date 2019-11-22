import { existsSync, readFileSync } from 'fs'

export const readAndParse = (path: string): object => {
  const file = readFileSync(path, 'utf-8')
  return JSON.parse(file)
}

export const readVariablesFile = (variablesPath: string): object => {
  if (existsSync(variablesPath)) {
    return readAndParse(variablesPath)
  }
  const filePathWithJsonExtension = `${variablesPath}.json`
  if (existsSync(filePathWithJsonExtension)) {
    return readAndParse(filePathWithJsonExtension)
  }

  throw new Error('Variables files was specified but cannot be found')
}
