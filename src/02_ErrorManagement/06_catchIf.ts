import { Effect } from "effect"
import { program } from "./01_errorTracking"

const recovered = program.pipe(
	Effect.catchIf(
		(error) => error._tag === "HttpError",
		() => Effect.succeed("Recovering from HttpError"),
	),
)
