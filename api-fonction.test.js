import { describe, it, expect } from "vitest";
import { displayImgTree } from "./src/display-cards.js";

describe("displayImgTree", () => {
  it("devrait retourner l'image adulte quand le stade est Adulte", () => {
    const tree = {
      lib_stade_developpement: "Adulte",
    };
    const result = displayImgTree(tree);

    expect(result).toBe(`/src/assets/adulte.png`);
  });
  it("devrait retourner l'image adulte quand le stade est Jeune", () => {
    const tree = {
      lib_stade_developpement: "Jeune",
    };
    const result = displayImgTree(tree);

    expect(result).toBe(`/src/assets/jeune.png`);
  });
  it("devrait retourner l'image adulte quand le stade est Juvénile", () => {
    const tree = {
      lib_stade_developpement: "Juvénile",
    };
    const result = displayImgTree(tree);

    expect(result).toBe("/src/assets/juvenile.png");
  });
  it("devrait retourner l'image adulte quand le stade est Mature", () => {
    const tree = {
      lib_stade_developpement: "Mature",
    };
    const result = displayImgTree(tree);

    expect(result).toBe("/src/assets/mature.png");
  });
  it("devrait retourner l'image adulte quand le stade est non renseigné", () => {
    const tree = {
      lib_stade_developpement: null,
    };
    const result = displayImgTree(tree);

    expect(result).toBe("/src/assets/default.png");
  });
});
