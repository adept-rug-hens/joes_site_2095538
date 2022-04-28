import { ReactDOM, React } from "./deps.ts";
import { App } from "./reactApp.tsx";

ReactDOM.hydrate(
	<App doc={(window as any).__INITIAL__DATA__.doc} />,
	document.getElementById("root")
);
