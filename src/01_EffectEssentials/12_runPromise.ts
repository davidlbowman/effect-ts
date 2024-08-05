import { Effect } from "effect"

Effect.runPromise(Effect.succeed(1)).then(console.log)
Effect.runPromise(Effect.fail("my error"))
