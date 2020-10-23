# CRA Shared Module Import Issue

## Description
When importing `okayExport` from `src/common/okayExport.js` into `src/App.js`, everything is fine. When importing `sketchyExport` from `src/common/sketchyExport.js` into `src/App.js`, the react build fails with the message: "Attempted import error: 'sketchyExport' is not exported from './common/sketchyExport.js'." If the line declaring `randomThingy` in `src/common/sketchyExport.js` is removed, then the build succeeds with no errors.

The issue is that the build somehow breaks when the "computed property" syntax is used in exporting file (i.e. the {['foo']: bar} syntax).

When running the development server, the app does not crash and behaves as expected. It is only during the build process that it fails.
