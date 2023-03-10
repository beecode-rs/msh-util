@beecode/msh-util / [Exports](modules.md)

[![Build Status](https://beecode.semaphoreci.com/badges/msh-node-util/branches/main.svg?style=shields)](https://beecode.semaphoreci.com/projects/msh-node-util)
[![codecov](https://codecov.io/gh/beecode-rs/msh-node-util/branch/main/graph/badge.svg?token=fHc0YaxEiB)](https://codecov.io/gh/beecode-rs/msh-node-util)
[![GitHub license](https://img.shields.io/github/license/beecode-rs/msh-node-util)](https://github.com/beecode-rs/msh-node-util/blob/main/LICENSE)  
[![NPM](https://nodei.co/npm/@beecode/msh-node-util.png)](https://nodei.co/npm/@beecode/msh-node-util)

# msh-node-util

Micro-service helper: node error

This project is intended to be used in typescript project.

<!-- toc -->

- [Install](#install)
- [Diagram](#diagram)
- [Usage](#usage)
  * [joiUtil](#joiutil)

<!-- tocstop -->

## Install

`npm i @beecode/msh-node-util`

## Diagram

![vision-diagram](resource/doc/vision/vision.svg)

## Usage

### joiUtil

```typescript
import { joiUtil } from '@beecode/msh-node-util/lib/joi-util'
import { ObjectSchema, Schema } from 'joi'
import { logger } from 'src/util/logger'

export const validationUtil = {
  sanitize: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>): T =>
    joiUtil.sanitize(objectToValidate, schema, { logger }),
  validate: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>): T =>
    joiUtil.validate(objectToValidate, schema, { logger }),
}
```
