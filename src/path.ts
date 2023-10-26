import { StreamOutput } from "./data.ts";

export function GetLocationsPath(doc: StreamOutput) {
  console.log(doc.id);
  return "location-" + "test" + "-" + "2";
};

export function GetAboutPath(doc: StreamOutput) {
  return "about-" + doc.locale;
};