# WebriverIO Cucumber Demo

## Requirements

-   npm
-   Docker

## Installation

1. Copy and paste `.env.dist` as `.env`
1. In `.env`, ensure that your version of selenium is compatible with your system's architecture. ex. Macs with the M1 processor MUST use the `seleniarm` version.
1. Install required libraries and packages via `npm install`

## Run Tests

1. `npm run regression` will run all of the regression tests using ChromeDriver
1. `npm run regression:docker` will run all of the regression tests using a dockerized Selenium
1. `npm run regression "#Scenario3"` will just run only the regression test tagged with `@Scenario3`

### Watch the tests in the browser: Docker

#### In Dockerized Selenium, but not Headless Docker

-   When the test starts, open your browser to `http:localhost:7900"
-   **Note:** The password is "secret"
