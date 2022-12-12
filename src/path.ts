import { StreamOutput } from "./data.ts";

export function GetLocationsPath(doc: StreamOutput) {
  return "location-" + doc.locale + "-" + doc.id + "-changed";
};

export function GetAboutPath(doc: StreamOutput) {
  return "about-" + doc.locale + "-changed";
};