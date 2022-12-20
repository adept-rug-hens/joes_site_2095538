import { urlWritebackPlugin } from "https://deno.land/x/yextpages@plugins@1.0.0-beta.3/index.ts"

const main = urlWritebackPlugin({
	apiKey:  "e4a3698b6ee02c74e90f1a6ac524c543",
	field: "c_pagesURL",
	v: "20221010"
})

export {
	main
}