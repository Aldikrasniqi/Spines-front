# spines-front

## Project Setup 

```sh
cd root-of-your-project
```

### Build docker image of vue application

```sh
docker build -t spines-frontend .
```

### Run vue application in the docker container

```sh
docker run -it -p 8080:8080 --rm --name spines-orchestration-frontend spines-frontend
```

<!-- ### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
``` -->
