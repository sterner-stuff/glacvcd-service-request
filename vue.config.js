const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	css: { extract: false },
	configureWebpack: {
		output: {
			filename: "js/[name].js",
			chunkFilename: "js/[name].js",
		},
	},
	chainWebpack: config => {
		config.module.rule("images").set("parser", {
			dataUrlCondition: {
				maxSize: Infinity,
			},
		});
	},
});
// module.exports = {
// 	css: { extract: false },
// 	chainWebpack: config => {
// 		if (config.plugins.has("extract-css")) {
// 			const extractCSSPlugin = config.plugin("extract-css");
// 			extractCSSPlugin &&
// 				extractCSSPlugin.tap(() => [
// 					{
// 						filename: "[name].css",
// 						chunkFilename: "[name].css",
// 					},
// 				]);
// 		}
// 		config.module.rule("images").type("asset/inline");
// 	},
// 	configureWebpack: {
// 		output: {
// 			filename: "js/[name].js",
// 			chunkFilename: "js/[name].js",
// 		},
// 	},
// };
