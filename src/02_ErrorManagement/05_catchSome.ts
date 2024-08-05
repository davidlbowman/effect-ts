import { Effect, Option } from "effect"
import { program } from "./01_errorTracking"

const recovered = program.pipe(
	Effect.catchSome((error) => {
		if (error._tag === "HttpError") {
			return Option.some(Effect.succeed("Recovering from HttpError"))
		}
		return Option.none()
	}),
)
