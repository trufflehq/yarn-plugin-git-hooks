import process from 'process';
import { type Plugin, type Project, SettingsType, execUtils } from '@yarnpkg/core';
import ci from 'ci-info';

declare module '@yarnpkg/core' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface ConfigurationValueMap {
    disableGitHooks: boolean;
    gitHooksPath: string | null;
  }
}

const plugin: Plugin = {
  configuration: {
    gitHooksPath: {
      description: 'Path to git hooks directory (recommended: .github/hooks)',
      type: SettingsType.STRING,
      default: null,
    },
    disableGitHooks: {
      description: 'Disable automatic git hooks installation',
      type: SettingsType.BOOLEAN,
      default: ci.isCI,
    },
  },
  hooks: {
    afterAllInstalled: async (project: Project) => {
      const path = project.configuration.get('gitHooksPath');
      const disabled = project.configuration.get('disableGitHooks');
      const isDlx = Boolean(project.cwd?.endsWith(`dlx-${process.pid}`));

      if (path && !ci.isCI && !isDlx && !disabled) {
        return execUtils.pipevp('git', ['config', 'core.hooksPath', path], {
          cwd: project.cwd,
          strict: true,
          stdin: process.stdin,
          stdout: process.stdout,
          stderr: process.stderr,
        });
      }
    },
  },
};

export default plugin;
