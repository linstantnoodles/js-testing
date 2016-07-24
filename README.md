# js-testing
basic unit testing javascript files

HTML template page: http://htmlshell.com/

Semantic Versioning

http://semver.org/
https://docs.npmjs.com/getting-started/semantic-versioning
https://docs.npmjs.com/misc/semver#x-ranges-12x-1x-12-
http://stackoverflow.com/questions/22343224/difference-between-tilde-and-caret-in-package-json

Import for package creators so they know how to update the version to communicate change so users know what changes to expect when they see the version and important for users to understand so you know what to expect.

Basic rules:

- major.minor.patch
- major breaks backwards compatability (breaking api changes). minor are feature additions (changes to functionality). patches are bug fixes / refactorings that don't change function.
- version 1.0.0 is the public api.
- Caret ranges, tilde ranges, hyphen ranges, and x-ranges that use the primitive range comparators. Tilde ranges mean allow changes based on which version is specified. Caret ranges mean no changes to left side (major). Only patch and minor updates.


Tools:

* Karma the test runner
* Jasmine the test framework
* chrome launcher
* the launcher


errors:

You need to include some adapter that implements __karma__.start method!'

Turns out, I was loading a non-test file that was missing a method that karma expected.



