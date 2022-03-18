const { ProvidePlugin } = require("webpack")

// see https://github.com/terra-money/terra.js/issues/223
module.exports = function override(config, env) {
	config.resolve.fallback = {
		crypto: require.resolve("crypto-browserify"),
		stream: require.resolve("stream-browserify"),
		buffer: require.resolve("buffer"),
	}

	config.plugins.push(
		new ProvidePlugin({
			Buffer: ["buffer", "Buffer"],
			process: "process/browser",
		})
	)

	config.ignoreWarnings = [/Failed to parse source map/]
	return config
}
