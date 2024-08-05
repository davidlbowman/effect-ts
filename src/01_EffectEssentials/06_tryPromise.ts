import { Effect } from "effect"

const getTodo = (id: number) =>
	Effect.tryPromise({
		try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
		catch: (unknown) => new Error(`something went wrong ${unknown}`),
	})

const program = getTodo(1)
