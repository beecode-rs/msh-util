# Migration @beecode/msh-node-util@3.5.0 to @beecode/msh-util@1.0.1

## cacheUtil

### 

from

```ts
import { cacheUtil } from '@beecode/msh-node-util/lib/cache-util'
// ...
export const cliShellServiceSingleton = cacheUtil.singleton((): CliShellService => new CliShellService())
```

to

```ts
import { singletonPattern } from '@beecode/msh-util/lib/singleton/pattern'
// ...
export const cliShellServiceSingleton = singletonPattern((): CliShellService => new CliShellService())
```
