import { Effect } from "effect"

const result1 = Effect.runSyncExit(Effect.succeed(1))
console.log(result1)

const result2 = Effect.runSyncExit(Effect.fail("error"))
console.log(result2)
