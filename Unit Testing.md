Unit Testing
- function to test logic function has right logic 
[] expected
[] actual
--------------------------------------------------
TDD (test driven template)
- think about code will do 
- write code
- test
- refactor
--------------------------------------------------
- testing structure => logic
- assertion function => to equal 
-  => watch changes
- mocking  سيميوليت 
- code coverage 
--------------------------------------------------
Code Coverage
--Coverage
--------------------------------------------------
Mock (test behavior)
- to test function (Called/times)

--------------------------------------------------
--------------------------------------------------

describe("describe", () => {
  it("here describe unit", () => {});
  test("here describe unit", () => {});
  test.skip("only", () => {
    const mocker=jest.fn((x)=>{return 3});
    expect(mocker(1)).toBe(mock.multiarg(1,2,2));
    expect(mocker).toBeCalled();
    expect(mocker).toBeCalledTimes(1);
   
    
  });
  test.skip("skip", () => {});
  beforeAll(() => {
    console.log("beforeAll");
  }, 100);
  beforeEach(() => {
    console.log("before each"); 
  }, 100);
  afterAll(() => {
    console.log("after each");
  }, 100);
  afterEach(() => {
    console.log("after each");
  }, 100);
});
/**----------------------
 *!    expect(value).
 *------------------------**/
//! Matchers
// ^ toBe(value)
// ^ toEqual(value)

// ^ toHaveLength(value)
// ^ toContain(value)

// ^ not.

// ^ toBeFalsy()
// ^ toBeTruthy()

// ^ toBeNull()
// ^ toBeUndefined()

// ^ toBeGreaterThan()
// ^ toBeGreaterThanOrEqual()
// ^ toBeLessThan()
// ^ toBeLessThanOrEqual()
// ^ toBeCloseTo() قريب من


// ^ toMatch(//ig) 'string'

// ^ anything() != null || undefined
// ^ any(STRING|NUMBER)

// ^ toMatchObject({})
// ^ toHaveProperty(key) 
// ^ toHaveProperty('key', value);

// ^ toBeDefined() Anything but undefined

expect.extend({
  name(r, t) {
    const v = r == t;
    if (v) {
      return {
        message: () => `ok`,
        pass: true,
      };
    } else {
      return {
        message: () => `not ok`,
        pass: false,
      };
    }
  },
});
expect.extend({
  name2(r, t,c) {
    const v = r == t==c;
    if (v) {
      return {
        message: () => `ok name2 name2 name2`,
        pass: true,
      };
    } else {
      return {
        message: () => `not name2 name2 name2`,
        pass: false,
      };
    }
  },
});