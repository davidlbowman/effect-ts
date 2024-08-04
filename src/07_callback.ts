import * as NodeFS from "node:fs"
import { Effect } from "effect"

const readFile = (filename: string) =>
	Effect.async<Buffer, Error>((resume) => {
		NodeFS.readFile(filename, (error, data) => {
			if (error) {
				resume(Effect.fail(error))
			} else {
				resume(Effect.succeed(data))
			}
		})
	})

const program = readFile("todos.txt")
