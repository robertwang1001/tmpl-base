## Settings

- **Node and Pnpm version management**:

  Usually if you have installed and configured [`fnm`](https://github.com/Schniz/fnm) correctly (`eval "$(fnm env --use-on-cd --shell zsh)"` in `.zshrc`), and `engines.node` in package.json is set to a stable major version which is defaulted in this tmpl, the node and pnpm version will be automatically used when you open or cd to your project (containing package.json).

  Otherwise, you can set manually:
   1. Run `fnm use 24` to switch Node.js version.
   2. Run `corepack use pnpm` to install pnpm or switch Pnpm version.

- **GitHub workflow release**:

   - Required permission: github repo => settings => actions => *Allow GitHub Actions to create and approve pull requests*

 - **Renovate**:

   - Add this project to [Repository Access](https://github.com/settings/installations/131785742)
   - Optional: more shared presets, check [robertwang1001/renovate-config](https://github.com/robertwang1001/renovate-config)

 - **NPM Trusted Publishing**:
 
   - First time publishing, you need to manually publish by yourself with 2FA.
   - After published, you need to configuring trusted publishing in the settings of the package, and configure in GitHub workflow of release: add permission `id-token: write`. Then future publishing will be automatically trusted, without using npm token.
   For more details, check [NPM Trusted Publishing](https://docs.npmjs.com/trusted-publishers)

## Extra dependencies

Install them manually when needed

```sh
 pnpm add logtape-easy # logging tool for apps
 pnpm add @logtape/logtape # logging tool for libs
```
