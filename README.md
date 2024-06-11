# Spines Project
## Audience
Non-profit organizations, skilled but inexperienced individuals, and community members seeking to exchange skills and services.

## Core Functionality
* Unified Profiles: Users create profiles detailing their skills, experience, and interests. Non-profits can showcase their missions and projects.
* Dual Purpose Projects: Non-profits post project listings requiring specific skills and time commitments, categorized as "Volunteer" for traditional volunteering.
* Flexible Contribution: Users contribute their skills through volunteering, gaining experience.
* Advanced Matching Algorithm: Matches users with suitable projects and skill exchange opportunities based on skills and interests.

## Benefits
* Empowers Non-Profits: Access skilled volunteers and leverage the time credit system to fill resource gaps.
* Flexible Volunteering: Volunteer opportunities for various schedules and interests.
* Strengthens Local Communities: Fosters mutual support and collaboration.
* Increases Transparency & Accountability: Promotes trust through clear communication and feedback systems.
* Unlocks New Skills & Services: Access needed services through time credits while learning new skills.

## Setting up the Backend (Java Spring Boot)

### Prerequisites

Before setting up the backend, ensure you have the following installed:
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (version 11 or higher)
- [Apache Maven](https://maven.apache.org/download.cgi) build automation tool

### Installation

1. Clone the backend repository from Taulant Avdiu GitHub:

```sh
git clone https://github.com/avdiutaulant/spines-project-backend.git
```
2. Clone the front end repository:
```sh
git clone https://github.com/Aldikrasniqi/Spines-front.git
```
## Frontend Setup in your machine
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
