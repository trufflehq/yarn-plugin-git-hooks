# yarn-plugin-git-hooks

Yarn Berry plugin for easy Git Hooks.

## Installation

```console
yarn plugin import https://raw.githubusercontent.com/trufflehq/yarn-plugin-git-hooks/main/bundles/%40yarnpkg/plugin-git-hooks.js
```

## Usage

1. Create your Git Hooks. We recommend `.github/hooks`.

> [!WARNING]  
> Make sure they are are executable (`chmod +x ./commit-msg`)!
>
> ```ansi
> hint: The '.github/hooks/commit-msg' hook was ignored because it's not set as executable.
> ```

2. Specify the path to your Git Hooks directory in `.yarnrc.yml`:

```yml
gitHooksPath: .github/hooks
```

Now, every time you run `yarn` (once packages are installed), your hooks will be configured.

> [!NOTE]  
> You can check the configuration succeeded with `git config --get core.hookspath`.

> [!WARNING]  
> This plugin is not compatible with Docker.  
> To disable, set `YARN_DISABLE_GIT_HOOKS=1`.
>
> ```dockerfile
> ENV YARN_DISABLE_GIT_HOOKS=1
> ```
>
> or
>
> ```console
>
> ```
