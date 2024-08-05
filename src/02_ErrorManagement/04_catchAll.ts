import { Effect } from "effect"
import { program } from "./01_errorTracking"

const recovered = program.pipe(
	Effect.catchAll((error) => Effect.succeed(`Recovering from ${error._tag}`)),
)
