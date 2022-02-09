export const getGrid = (text: string, size: string) => {
  const grid = `
    <div class="grid-container">
      <div class="grid" style="--grid-size: ${size}">
        ${[...text]
          .map((char) => {
            return `<div class="grid-item" style="background-color: var(--c${char})"></div>`;
          })
          .join("\n")}
      </div>
    </div>
    `;

  return grid;
};
