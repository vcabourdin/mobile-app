QUnit.config.autostart = false;
require(
    [
    "qunit/tests/example1",
    "qunit/tests/example2",
    ],
    function (Example1, Example2) {
        QUnit.start();
        Example1.RunTests();
        Example2.RunTests();
    });