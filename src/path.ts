import { StreamOutput } from "./data.ts";

export function GetLocationsPath(doc: StreamOutput) {
  return "location-" + doc.locale + "-" + doc.profile.name;
};

export function GetAboutPath(doc: StreamOutput) {
  return "about-" + doc.locale;
};
