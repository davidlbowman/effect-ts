import { Effect, pipe } from "effect"

const program = pipe(Effect.succeed(5), Effect.as("new value"))

Effect.runPromise(program).then(console.log)
