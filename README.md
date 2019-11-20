# ejs-preview

Simple package for previewing ejs templates

## Installation

### Yarn

As normal dependency:

``` shell
yarn add @est-normalis/ejs-preview
```

or as dev dependency:

``` shell
yarn add -D @est-normalis/ejs-preview
```

### npm

As normal dependency:

``` shell
npm i @est-normalis/ejs-preview
```

or as dev dependency:

``` shell
npm i @est-normalis/ejs-preview --save-dev
```

## Usage

@est-normalis/ejs-preview exports by default function allowing
to start webserver and serve choosen ejs file.

``` javascript
import preview from '@est-normalis/ejs-preview'

preview({
    templatePath: 'src/templates/index.html.ejs'
})
```

The function takes object specified in PreviewConfig interface
as argument.

Aviable options:

``` typescript
templatePath: string
variables?: any
url?: string
port?: any
mimeType?: string
```
