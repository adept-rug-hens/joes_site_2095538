import { StreamOutput } from "./data.ts";

export function GetPath(doc: StreamOutput) {
  return "location-" + doc.id;
};