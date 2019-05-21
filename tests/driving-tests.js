var expect = chai.expect;

describe("Driving a Car", function() {

    let sandbox; //added
    let car;

    beforeEach(function() {
      // create a sandbox
      sandbox = sinon.sandbox.create();

      // stub some console methods
      //sandbox.stub(window.console, "log");
      //sandbox.stub(window.console, "error");
        
        car = {};
            car.style = {};
            car.style.top = "";
            car.style.left = "";
            car.className = "";

        //mocing complex objects such as DOM
            //https://codeutopia.net/blog/2016/05/23/sinon-js-quick-tip-how-to-stubmock-complex-objects-such-as-dom-objects/

        //mocking document load
            //https://stackoverflow.com/questions/43083419/karma-mocha-how-to-test-method-that-listens-to-domcontentloaded-event/43474345
    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    });

    describe("calling forward while facing east", function() {
        it("should move car from right to left", function() {

            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car east";

            //ACT
                forward(car);

            //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.style.top).to.equal('0px');
                expect(car.style.left).to.equal('10px');
        });
    });

    describe("calling forward while facing west", function() {
        it("should move car from left to right", function() {
        
        });
    });

    describe("calling forward while facing north", function() {
        it("should move car from bottom to top", function() {
        
        });
    });

    describe("calling forward while facing south", function() {
        it("should move car from top to bottom", function() {
        
        });
    });

/// EXAMPLE SYNTAX BELOW

//   describe("#greets", function() {
//     it("should throw if no target is passed in", function() {
//       expect(function() {
//         (new Cow()).greets();
//       }).to.throw(Error);
//     });

//     it("should greet passed target", function() {
//       var greetings = (new Cow("Kate")).greets("Baby");
//       expect(greetings).to.equal("Kate greets Baby");
//     });
//   });

//   describe("#consoleGreets", function() {
//     it("should throw if no target is passed in", function() {
//         (new Cow()).consoleGreets();

//         sinon.assert.notCalled(console.log);
//         sinon.assert.calledOnce(console.error);
//         sinon.assert.calledWithExactly(console.error, "missing target");
//     });

//     it("should greet passed target", function() {
//       var greetings = (new Cow("Kate")).consoleGreets("Baby");

//       sinon.assert.notCalled(console.error);
//       sinon.assert.calledOnce(console.log);
//       sinon.assert.calledWithExactly(console.log, "Kate greets Baby")
//     });
//   });

//   describe("#lateGreets", function() {
//     it("should pass an error if no target is passed", function(done) {
//       (new Cow()).lateGreets(null, function(err, greetings) {
//         expect(err).to.be.an.instanceof(Error);
//         done();
//       });
//     });

//     it("should greet passed target after one second", function(done) {
//       (new Cow("Kate")).lateGreets("Baby", function(err, greetings) {
//         expect(greetings).to.equal("Kate greets Baby");
//         done();
//       });
//     });
//   });
});