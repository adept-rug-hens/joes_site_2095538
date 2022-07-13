export interface AddressData {
  line1: string;
  line2: string;
  city: string;
  region: string;
  postalCode: string;
}

export interface StreamOutput {
  address: AddressData;
  name: string;
  id: string;
  locale: string;
  _site: {
    c_siteTitle: string;
    c_siteDescription: string;
  }
}

export interface Data {
  streamOutput: StreamOutput;
  feature: string;
}

export interface Result {
  content: string;
  path: string;
  redirects: string[];
}    

export function GetLocationsPath(doc: StreamOutput) {
  return "location-" + doc.locale + "-" + doc.id;
};

export async function renderFunction(doc: Data) {
    let path;
    let template;
    console.log(doc);
    path = GetLocationsPath(doc.streamOutput);
    template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React Page Usings FUNCTIONS</title>
  </head>
  <body>
      <div id="root">USING FUNCTIONS</div>
  </body>
  </html>` 
    
    const result: Result = { content: template, path: path, redirects: [] };
    return result;
  }