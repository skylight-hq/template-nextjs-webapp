# NextJS Web Application Template

This is a template for a NextJS application that includes the setup of common dependencies used in federal web applications. See list below.

- NextJS
- Eslint
- Prettier
- Jest
- Playwright
- Axe (for playwright)
- Sass
- USWDS (integration with Sass)
- @trussworks/react-uswds (USWDS react ready components)
- lefthook (pre-commit configuration only)

## Getting Started

This site (currently just one page) is implemented with the NextJS framework. Pages were built using `@uswds/uswds` and `@trussworks/react-uswds`. The USWDS settings can be adjusted to any color palette, please see uswds settings in `uswds-customized.scss` for examples on how.

## Local development

You will need `node v20+` installed. To install app dependencies run command:

`npm install`

Start the application in watch mode and hot reload with command:

`npm run dev`

Application will be available in `http://localhost:3000`.

### pre-commit hook

This project uses `lefthook` to trigger linting fixes on commit. As part of the local development setup install [lefthook](https://lefthook.dev/installation/index.html) in your local and run below command at the root:

`lefthook install`