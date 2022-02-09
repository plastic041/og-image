import { ParsedRequest } from "./types";
import { decompress } from "shrink-string";
import { getGrid } from "./grid";

function getCss() {
  return `
    :root {
      --c0: #1a1c2c;
      --c1: #5d275d;
      --c2: #b13e53;
      --c3: #ef7d57;
      --c4: #ffcd75;
      --c5: #a7f070;
      --c6: #38b764;
      --c7: #257179;
      --c8: #29366f;
      --c9: #3b5dc9;
      --ca: #41a6f6;
      --cb: #73eff7;
      --cc: #f4f4f4;
      --cd: #94b0c2;
      --ce: #566c86;
      --cf: #333c57;
    }

    body {
      background: #fff;
      height: 100vh;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
    }

    .grid-container {
      width: 800px;
      height: 800px;
      display: flex;
    }
    
    .grid {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(var(--grid-size), 1fr);
      grid-template-rows: repeat(var(--grid-size), 1fr);
    }

    .grid-item {
      width: 100%;
      height: 100%;
    }
    `;
}

export async function getHtml(parsedReq: ParsedRequest) {
  const { text, size } = parsedReq;
  const decoded = await decompress(text);
  const html = `
<!DOCTYPE html>
<html>
  <meta charset="utf-8">
  <title>Generated Image</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    ${getCss()}
  </style>
  <body>
    ${getGrid(decoded, size)}
  </body>
</html>`;

  return html;
}
