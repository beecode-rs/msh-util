[@beecode/msh-util](../README.md) / regex-util

# Module: regex-util

## Table of contents

### Variables

- [regexUtil](regex_util.md#regexutil)

## Variables

### regexUtil

• `Const` **regexUtil**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | ``"\\b[0-9a-f]{8}\\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\\b[0-9a-f]{12}\\b"`` | This is a UUID regex expression. This is usually used in express router to constrict the values passed as a path parameter (if you are using UUID as your identifier). **`Example`** ```ts const { uuid } = regexUtil router.route(`/users/:userId(${uuid})`).get(getUsersById) //... ``` |

#### Defined in

[packages/util/src/regex-util.ts:1](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/regex-util.ts#L1)
