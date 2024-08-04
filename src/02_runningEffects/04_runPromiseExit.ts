import { Effect } from "effect"

Effect.runPromiseExit(Effect.succeed(1)).then(console.log)
Effect.runPromiseExit(Effect.fail("my error")).then(console.log)
