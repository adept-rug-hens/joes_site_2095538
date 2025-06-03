import { StreamOutput } from "./data.ts";

export async function GetLocationsPath(doc: StreamOutput) {
  console.log(doc.id);
  await new Promise(f => setTimeout(f, 1000));

  return "location-" + doc.locale + "-" + doc.id;
};

export function GetAboutPath(doc: StreamOutput) {
  return "about-" + doc.locale;
};
