var reporters = require('jasmine-reporters');

var tapReporter = new reporters.TapReporter();
jasmine.getEnv().addReporter(tapReporter);
