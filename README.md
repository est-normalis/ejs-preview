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

### As normal library

@est-normalis/ejs-preview exports by default function allowing
to start webserver and serve choosen ejs file.

``` typescript
import { previewTemplate } from '@est-normalis/ejs-preview'

previewTemplate({
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

### As CLI

@est-normalis/ejs-prewiev has a command line interface.
It allows you to create preview server without creating
unneccessary boilerplate files.

The cli is aviables when you simply type package name in shell.

``` shell
@est-normalis/ejs-prewiev <templatePath>
```

The command takes two positional arguments.
The first one is obligatory and takes a path to template.

``` shell
@est-normalis/ejs-prewiev index.html.ejs
```

The second one is optional and takes path to JSON file
with variables required by template. If not passed
variables passed to template are equal to empty object (`{}`).

``` shell
@est-normalis/ejs-prewiev index.html.ejs variables.json
```

If your file has .json extension you can ommit it when typing
its path, however if there is another file mathing name without
extension it will be required and parsed.

#### Example

`index.html.ejs`:

``` html
<p><%= somekey %></p>
```

`variables.json`:

``` json
{
    "somekey": "somevalue"
}
```

command:

``` shell
@est-normalis/ejs-prewiev index.html.ejs variables
```

result (html):

``` html
<p>somevalue</p>
```

#### Flags

You can pass certain flags to the command:

##### Port

Flag:
`-p`, `--port`

Example:
`-p 997`

Result:
Page will be aviable under `localhost:997` instead of default `localhost:9999`.

##### host

Flag:
`-h`, `--host`

Example:
`-h 10.0.2.15`

Result:
Server url will be changed to the new one. Its especially useful when
you for example want to preview template on virtual machine on its internal network.

##### mime

Flag:
`-m`, `--mime`

Example:
`-m text/plain`

Result:
Changes default `Content-Type` header from `text/html` to- in this case- `text/plain`.
