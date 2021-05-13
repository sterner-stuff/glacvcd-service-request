module.exports = {
	css: { extract: false },
	devServer: {
		host: "glacvcdsr.test",
	},
	chainWebpack: config => {
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
		config.module
			.rule("images")
			.use("url-loader")
			.loader("url-loader")
			.tap(options => Object.assign(options, { limit: Infinity }));
	},
	configureWebpack: {
		output: {
			filename: "js/[name].js",
			chunkFilename: "js/[name].js",
		},
	},
};
