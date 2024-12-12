# JUDI convention for development instructions

NOTE: All members must adhere to the rules of the project

## Coding rules

### File name

- Strict adherence to the naming convention in kebab-case is required(https://twitter.com/kentcdodds/status/1249870276688371713)
- File Description: using existing snippet `filedesc` or `fndesc` to auto generate file description.

### Git new -feature branch workflow

1. Create a feature branch from the `target || feature || develop || master` branch:

```bash
 git checkout develop
 git pull origin develop --ff-only
 git checkout -b my_new_feature
```

2. Write your code, and make sure to follow the coding style guidelines

### Commit messages

- Use meaningful in the subject line (e.g., "[RFM-0001] Fix typo", not "Fixed typo")
- Limit the subject line to 50 characters or less
- Reference issues and pull requests liberally after the subject line

Follow these conventions when writing commit messages:

### Typescript

- Follow the coding style guide provided by Google for Typescript (https://google.github.io/styleguide/tsguide.html)
- Clean code js (https://github.com/ryanmcdermott/clean-code-javascript)
- Naming (https://github.com/kettanaito/naming-cheatsheet)

### Code Performance

#### Code Splitting

- Code splitting is a technique of splitting production JavaScript into smaller files, thus allowing the application to be only partially downloaded. Any unused code will not be downloaded until it is required by the application.
- Most of the time code splitting should be done on the routes level, but can also be used for other lazy loaded parts of application.
- Do not code split everything as it might even worsen your application's performance.

#### Render Optimization:

- Memoization: Use memoization to avoid unnecessary renders.
- React.memo: Use memo to prevent unnecessary renders when props or states don't change.
- Note: Please note to use caching in the most appropriate and effective manner

#### Image Optimization:

- Optimize images using compression and lazy loading.
- Use libraries like react-native-fast-image to enhance image performance.

#### DevTools and Profiling:

- Use Flipper to debug, monitor and analyze your application's performance

### Testing:

- Ensure that all code are tested thoroughly with unit tests.

### Tools:

- install tool: [sonar lint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode) to check the smell code

## updating...
