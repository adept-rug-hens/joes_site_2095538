import { ReactDOMServer, ReactDOM, React } from "./deps.ts";
import { App, AppWrap } from "./reactApp.tsx";
import { Data, Result } from "./data.ts";
import { GetPath } from "./path.ts";


export async function ReactPlugin(doc: Data) {
  const reactString = ReactDOMServer.renderToString(AppWrap(doc.streamOutput));
  const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Page Usings Plugin</title>
    <script>window.__INITIAL__DATA__ = ${JSON.stringify({ doc: doc.streamOutput })}</script>
</head>
<body>
    <div id="root">${reactString}</div>
    <script src="/bundle.js" defer></script>
</body>
</html>` 

  console.log(template); 
  const path = GetPath(doc.streamOutput);
  const result: Result = { content: template, path: path, redirects: [] };
  return result;
}