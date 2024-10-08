import { Effect } from "effect"
import { program } from "./01_errorTracking"

const recovered = program.pipe(
	Effect.catchTag("HttpError", (_HttpError) =>
		Effect.succeed("Recovering from HttpError"),
	),
	Effect.catchTag("ValidationError", (_ValidationError) =>
		Effect.succeed("Recovering from ValidationError"),
	),
)
