export async function main(argumentJson) {
	let catResp;
	if (argumentJson["urlArgs"]["something"]) {
		console.log(argumentJson["urlArgs"]["something"])
	} 

	return {
		"body": `		
<!DOCTYPE html>
<html lang="en">
<head>
<style>
body{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: monospace;
	font-size: 32px;
}
</style>
</head>
<body>
<h1>Dynamic Routing Demo! 🐈</h1>
<p>:) You're variadic argument is ${argumentJson["urlArgs"]["something"]}</p>
</body>
</html>
		`,
		"statusCode": 200,
		"headers": {
			// "Cache-control": "private",
			"X-Yext-Test": "Example header",
		},
	  };

