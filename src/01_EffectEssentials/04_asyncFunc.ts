import { Effect } from "effect"

const parse = (input: string) =>
	Effect.try({
		try: () => JSON.parse(input),
		catch: (unknown) => new Error(`something weng wrong ${unknown}`),
	})

const program = parse("")
