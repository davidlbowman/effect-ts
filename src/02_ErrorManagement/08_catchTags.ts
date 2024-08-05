import { Effect } from "effect"
import { program } from "./01_errorTracking"

const recovered = program.pipe(
	Effect.catchTags({
		HttpError: (_HttpError) => Effect.succeed("Recovering from HttpError"),
		ValidationError: (_ValidationError) =>
			Effect.succeed("Recovering from ValidationError"),
	}),
)
