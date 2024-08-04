import { Effect } from "effect"

interface User {
	readonly id: number
	readonly name: string
}

const userDatabase: Record<number, User> = {
	1: { id: 1, name: "John Doe" },
	2: { id: 2, name: "Jane Smith" },
}

const getUser = (userId: number): Effect.Effect<User, Error> => {
	const user = userDatabase[userId]
	if (user) {
		return Effect.succeed(user)
	}
	return Effect.fail(new Error("User not found"))
}

const exampleUserEffect = getUser(1)
