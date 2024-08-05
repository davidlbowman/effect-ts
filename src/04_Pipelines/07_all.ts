import { Effect } from "effect"

const webConfig = Effect.promise(() =>
	Promise.resolve({ dbConnection: "localhost", port: 8080 }),
)

const checkDatabaseConnectivity = Effect.promise(() =>
	Promise.resolve("Connected to Database"),
)

const startupChecks = Effect.all([webConfig, checkDatabaseConnectivity])

Effect.runPromise(startupChecks).then(([config, dbStatus]) => {
	console.log(
		`Configuration: ${JSON.stringify(config)}, DB Status: ${dbStatus}`,
	)
})
