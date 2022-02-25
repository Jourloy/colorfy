# Colorfy

[![](https://img.shields.io/npm/v/@jourloy/colorfy?logo=npm&style=flat-square)](https://www.npmjs.com/package/@jourloy/colorfy?activeTab=versions)


## Getting started

### Installing

```bash
$ npm i @jourloy/colorfy@latest
```

## Usage

Import package

```ts
import { Colorfy } from '@jourloy/colorfy'
```

Create logger

```ts
const logger = new Colorfy();
```

Log

```ts
logger.log('Objects: ', 3, '!');
// or
logger.log(`Objects: ${3}!`);
```

## Functions

- `.log()` 
- `.warn()`
- `.error()`
- `.info()`
- `.debug()`

## Options

You can choose log level for new logger by sending array with all level which you want see in console

```ts
new Colorfy({ log: ['log', 'warn', 'error'] });
```

You can change name of your logger

```ts
new Colorfy() // DD-MM-YYYY | Logger | level: message
new Colorfy({ name: 'CoolLogger' }) // DD-MM-YYYY | CoolLogger | level: message
```