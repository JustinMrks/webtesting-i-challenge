const { success, fail, repair, get } = require("./enhancer.js");
// test away!
describe("success", () => {
  it("enhancement > 20", () => {
    expect(success({ name: "Will", durability: 15, enhancement: 50 })).toEqual({
      name: "Will",
      durability: 15,
      enhancement: 50,
    });
  });
  it("enhancement < 20", () => {
    expect(success({ name: "Will", durability: 15, enhancement: 1 })).toEqual({
      name: "Will",
      durability: 15,
      enhancement: 2,
    });
  });
});
describe("fail", () => {
  it("-5 durability when >15 enhancement", () => {
    expect(
      fail({ name: "iron dagger", durability: 50, enhancement: 2 })
    ).toEqual({ name: "iron dagger", durability: 45, enhancement: 2 });
  });
  it("-10 durability when <= 15 enhancement", () => {
    expect(
      fail({ name: "iron dagger", durability: 50, enhancement: 15 })
    ).toEqual({ name: "iron dagger", durability: 40, enhancement: 15 });
  });
  it("-10 durability and -1 enhancement when < 16 enhancement", () => {
    expect(
      fail({ name: "iron dagger", durability: 50, enhancement: 17 })
    ).toEqual({ name: "iron dagger", durability: 40, enhancement: 16 });
  });
});
describe("repair", () => {
  it("sets an items durability to max", () => {
    expect(
      repair({ name: "iron dagger", durability: 50, enhancement: 17 })
    ).toEqual({ name: "iron dagger", durability: 100, enhancement: 17 });
  });
});
