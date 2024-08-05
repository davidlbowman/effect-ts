import { Effect } from "effect"

const success = Effect.succeed("success")
const failure = Effect.fail("failure")
const fallback = Effect.succeed("fallback")

const program1 = Effect.orElse(success, () => fallback)
const program2 = Effect.orElse(failure, () => fallback)

console.log(Effect.runSync(program1))
console.log(Effect.runSync(program2))
