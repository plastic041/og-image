import { IncomingMessage } from "http";
import { ParsedRequest } from "./types";
import { parse } from "url";

export function parseRequest(req: IncomingMessage) {
  const { pathname, query } = parse(req.url || "/", true);
  const { size } = query || {};

  if (Array.isArray(size)) {
    throw new Error("Expected a single size");
  }

  const arr = (pathname || "/").slice(1).split(".");
  let text = "";
  if (arr.length === 0) {
    text = "";
  } else if (arr.length === 1) {
    text = arr[0];
  } else {
    text = arr.join(".");
  }

  const parsedRequest: ParsedRequest = {
    text: decodeURIComponent(text),
    size: size || "16",
  };

  return parsedRequest;
}
