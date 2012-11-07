define(
    [
    "app"
    ],
    function (App) {
        return {
            RunTests: function () {
                module("Example 2");
            
                test("one tautology", function() {
                    ok(true);
                    console.log(App);
                });               
            }
        };
    });