[**@beecode/msh-util**](../../README.md)

***

[@beecode/msh-util](../../README.md) / [regex-util](../README.md) / regexUtil

# Variable: regexUtil

> `const` **regexUtil**: `object`

Defined in: [packages/util/src/regex-util.ts:1](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/regex-util.ts#L1)

## Type Declaration

### uuid

> **uuid**: "\\b\[0-9a-f\]\{8\}\\b-\[0-9a-f\]\{4\}-\[0-9a-f\]\{4\}-\[0-9a-f\]\{4\}-\\b\[0-9a-f\]\{12\}\\b"

This is a UUID regex expression. This is usually used in express router to constrict the values passed as a path parameter (if you are using UUID as your identifier).

#### Returns

#### Example

```ts
const { uuid } = regexUtil
router.route(`/users/:userId(${uuid})`).get(getUsersById)
//...
```
