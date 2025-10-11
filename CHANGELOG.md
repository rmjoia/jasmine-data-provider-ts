# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2025-10-11

### Changed

- Migrated from Karma-based browser testing to Jasmine CLI with tsx for faster, more reliable test execution (internal change only - API unchanged)
- Updated TypeScript from 4.3.4 to 5.7.2
- Updated @types/jasmine from 3.5.14 to 5.1.4
- Updated Jasmine from 3.6.0 to 5.5.0
- Updated Prettier from 2.1.1 to 3.4.2
- Replaced deprecated tslint with ESLint
- Modernized tsconfig.json with stricter type checking and skipLibCheck

### Added

- ESLint configuration with TypeScript support (eslint.config.mjs)
- tsx for TypeScript execution (replaces ts-node)
- @types/node for Node.js type definitions
- jasmine.json configuration for test runner
- tsconfig.test.json for test-specific TypeScript configuration

### Removed

- All Karma-related packages and configuration (karma, karma-typescript, karma-jasmine, karma-chrome-launcher, karma-spec-reporter)
- tslint and tslint-config-prettier (deprecated)
- Browser-based testing infrastructure
- karma.conf.js configuration file
- tslint.json configuration file
- Obsolete package resolutions

### Fixed

- Tests now exit after 1 run
- Eliminated 1000+ TypeScript compilation errors from @types/node conflicts
- Significantly faster test execution (Node-based vs browser-based)
- More reliable CI/CD integration

## [1.4.5] - Previous Release

- Legacy version with Karma-based testing
