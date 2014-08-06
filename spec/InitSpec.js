describe("global", function() {
  it("is a function", function() {
    expect(typeof global).toEqual('object');
  });
});

describe("Init", function() {
  it("is a function", function() {
    expect(typeof Init).toEqual('function');
  });
});