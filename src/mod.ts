import { ReactDOMServer } from "./deps.ts";
import { AppWrap } from "./reactApp.tsx";
import { StaticWrap } from "./staticApp.tsx";
import { Data, Result } from "./data.ts";
import { GetAboutPath, GetLocationsPath } from "./path.ts";


export async function RenderPage(doc: Data) {
  let reactString;
  let path;
  let template;
  console.log(doc);
  if (doc.feature === "About") {
    reactString = ReactDOMServer.renderToString(StaticWrap(doc.streamOutput));
    path = GetAboutPath(doc.streamOutput);
    template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Page Usings Plugin</title>
</head>
<body>
    <div id="root">${reactString}</div>
</body>
</html>` 
  } else {
    reactString = ReactDOMServer.renderToString(AppWrap(doc.streamOutput));
    path = GetLocationsPath(doc.streamOutput);
    template = `
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
  }
  const result: Result = { content: template, path: path, redirects: [`other-${path}`]  };
  console.error("oh noooo : julie error")
  return result;
}
