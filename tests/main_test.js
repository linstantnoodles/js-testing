describe("Main", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  describe ("greeting", function () {
    it("returns 'Hello World'", function() {
        var test = new Test();
        expect(test.greeting()).toBe("Hello World");
    })
  });
});
