describe("fizzBuzz function", function() {

    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });

    describe("Returns number, fizz, buzz or fizzbuzz", function() {

        it("should exist", function() {
             expect(fizzBuzz).toBeDefined();
        });

        it("should return Fizz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });

        it("should return Buzz when called as fizzBuzz(10)", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });

        it("should return fizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("fizzBuzz");
        });

        it("should return 7 when called as fizzBuzz(7)", function() {
            var result = fizzBuzz(7)
            expect(result).toBe(7);
        });
    });
});


