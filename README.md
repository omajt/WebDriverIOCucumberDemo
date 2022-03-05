# WebriverIO Cucumber Demo

## Requirements

* npm
* Docker

## Installation

1. Copy `.env.dis` to `.env`
1. In `.env`, ensure that your version of selenium is compatible with your system's architecture. ex. Macs with the M1 processor use the `seleniarm` version.

## Run Tests

1. `npm run regression` will run all of the regression tests
1. `npm run regression "#Scenario3"` will just run only the regression test tagged with `@Scenario3`

### Watch the tests in the browser

* When the test starts, open your browser to `http:localhost:7900"
* **Note:** The password is "secret"
