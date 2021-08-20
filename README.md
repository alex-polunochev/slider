## Slider Test App

The goal of this exercise is to build a simple slideshow.

The slideshow application does:

- works on desktop, tablets, and mobile (tested in browser, Chrome device emulation mode, on smartphone);
- displays the images provided in the deployed folder (static images, list with paths supplied via constant variable);
- tracks how many times each picture is viewed (does not store these values between refreshes).

![app screenshot](/public/app_screenshot.png)

## Implementation Details

This is a [Next.js](https://nextjs.org/)-based project bootstrapped with [`create-next-app`](https://nextjs.org/docs/api-reference/create-next-app).

Due to the freedom of choice for platform and tools, Next.js was selected along with [`Styled Components`](https://github.com/styled-components/styled-components) for app features implementation.

## Running the application in development mode

Application can be downloaded as ZIP archive or cloned with `git`.
This guide assumes that the LTS Node version is installed on the computer.

The instructions provided have `npm` used, but `yarn` can be used as well.

Install the dependencies by running:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Generating assets and deployment

Ideal deployment solution for Next.JS application would be Vercel cloud platform, as it takes care about the most of the CI/CD troubles in the initial stage of application growth and provides zero config deployments.

Vercel connects directly to Github repository, listens to `push` commands on a configured branches and automatically builds and deploys applications to either staging server or to production.

Find the deployed to Vercel version of the **Slider Test App** by the link - https://slider-test-mocha.vercel.app/

![vercel screenshot](/public/vercel_screenshot.png)

If a different cloud platform is used, find the instructions on how to deploy generated assets and launch the app under those conditions.
To generate assets for deployment follow the guide (e.g. for NodeJS server) https://nextjs.org/docs/deployment#other-hosting-options

## Testing

Application has the basic testing coverage for the interest of time implemented with a few unit test cases only. Testing infrastructure includes [`Testing Library`](https://testing-library.com/) and [`Jest`](https://jestjs.io/en/) runner.
If end to end test were to be implemented, the [`Cypress`](https://www.cypress.io/) framework would be a tool of choice.

Test suite can be launched using `npm` command

```bash
npm run test
```

or if `jest` is installed globally, then directly via

```bash
jest
```

Current list of scenarios includes:

```
 PASS  test/src/components/Slider.test.js
  Slider component
    ✓ renders without crash (45 ms)
    ✓ shows loading animation on image switch (22 ms)
    ✓ increments views count if image has been seen multiple times (14 ms)
```
