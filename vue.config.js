module.exports = {
	devServer: {
		host: "glacvcdsr.test",
	},
	chainWebpack: (config) => {
		if (config.plugins.has("extract-css")) {
			const extractCSSPlugin = config.plugin("extract-css");
			extractCSSPlugin &&
				extractCSSPlugin.tap(() => [
					{
						filename: "[name].css",
						chunkFilename: "[name].css",
					},
				]);
		}
	},
	configureWebpack: {
		output: {
			filename: "js/[name].js",
			chunkFilename: "js/[name].js",
		},
	},
};
