# yarn-plugin-git-hooks

Yarn Berry plugin for easy Git Hooks.

## Installation

```sh
yarn plugin import https://raw.githubusercontent.com/trufflehq/yarn-plugin-git-hooks/main/bundles/%40yarnpkg/plugin-git-hooks.js
```

## Usage

1. Create your Git Hooks. We recommend `.github/hooks`.

> **Warning**:  
> Make sure they are are executable (`chmod +x ./commit-msg`)!
>
> ```ansi
> hint: The '.github/hooks/commit-msg' hook was ignored because it's not set as executable.
> ```

2. Specify the path to your Git Hooks directory in `.yarnrc.yml`:

```yaml
gitHooksPath: .github/hooks
```

Now, every time you run `yarn` (once packages are installed), your hooks will be configured.

> **Note**:  
> You can check the configuration succeeded with `git config --get core.hookspath`.

## Docker

> **Important**:  
> This plugin is not compatible with Docker.  
> To disable, set `YARN_NO_INSTALL_GITHOOKS=1`.  
>
> ```dockerfile
> ENV YARN_NO_INSTALL_GITHOOKS=1
> ```
