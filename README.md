## TypeScript 中文文档构建仓库

根据 [TypeScript WebSite 社区提出的计划](https://github.com/microsoft/TypeScript-Website/issues/2804)，官方本地化工作即将停止。所以我希望在这里继续简体中文本地化的工作。

目前为了保持稳定，我们仍然采取原有的本地化方式进行构建，即在本仓库触发 Vercel 的构建。而在 [ts-zh-docs/TypeScript-zh-Website](https://github.com/ts-zh-docs/TypeScript-zh-Website) 进行更新。一切有关翻译的讨论都将移至那个仓库，本仓库只负责构建工作。**中文文档的线上地址请访问[这里](https://www.tslang.com.cn/zh)**。

本地开发环境构建步骤：

1. 使用 Node 18.x 版本。
2. 使用 `pnpm` 命令安装依赖。

```shell
pnpm docs-sync pull ts-zh-docs/TypeScript-zh-Website#main 1 
pnpm bootstrap
pnpm start
```

本地生产环境构建步骤：

环境同上。

<<<<<<< HEAD
直接运行 `pnpm run build-and-deploy`，可以去 [`package.json`](https://github.com/ts-zh-docs/TypeScript-Website/blob/v2/package.json#L67) 中查看细节。
=======
- All packages have: `pnpm build` and `pnpm test`
- All packages use [debug](https://www.npmjs.com/package/debug) - which means you can do `env DEBUG="*" pnpm test` to get verbose logs

Having issues getting set up? [Consult the troubleshooting](./docs/Setup%20Troubleshooting.md).

## Deployment

Deployment is automatic:

- Pushes to the branch `v2` deploy to [production](https://www.typescriptlang.org)

You can find the build logs in [GitHub Actions](https://github.com/microsoft/TypeScript-Website/actions)

## Docs

If you want to know _in-depth_ how this website works, there is an [hour long video covering the codebase, deployment and tooling on YouTube.](https://www.youtube.com/watch?v=HOvivt6B7hE). Otherwise there are some short guides:

- [Converting Twoslash Code Samples](./docs/Converting%20Twoslash%20Code%20Samples.md)
- [How i18n Works For Site Copy](./docs/How%20i18n%20Works%20For%20Site%20Copy.md)
- [Updating the TypeScript Version](./docs/New%20TypeScript%20Version.md)
- [Something Went Wrong](./docs/Something%20Went%20Wrong.md)

## Changesets

This repo uses `pnpm` + `changesets` to manage package version bumps and releases.

CI will fail if a PR modifies a public package but is missing a changeset. To add a changeset, run `pnpm changeset`, then follow along with the CLI.

```console
$ pnpm changeset
🦋  Which packages would you like to include? … 
◯ changed packages
  ◯ create-typescript-playground-plugin
  ◯ @typescript/vfs
  ◯ @typescript/twoslash
  ◯ @typescript/sandbox
  ◯ @typescript/ata
```

New files will be created in `.changeset` and must be committed.

PRs which don't modify public packages (e.g. website content updates) do not require changesets.
If you are making a change to a published package but are not affecting published code, you can create an empty changeset for your PR with `pnpm changeset --empty`.

# Website Packages

## TypeScriptLang-Org

The main website for TypeScript, a Gatsby website which is statically deployed. You can run it via:

```sh
pnpm start
```

To optimize even more, the env var `NO_TRANSLATIONS` as truthy will make the website only load pages for English.

## Sandbox

The editor aspect of the TypeScript Playground REPL, useable for all sites which want to show a monaco editor
with TypeScript or JavaScript code.

## Playground

The JS code has an AMD module for the playground which is loaded at runtime in the Playground website.

# Doc Packages

## TSConfig Reference

A set of tools and scripts for generating a comprehensive API reference for the TSConfig JSON file.

```sh
# Generate JSON from the typescript cli
pnpm run --filter=tsconfig-reference generate-json
# Jams them all into a single file
pnpm run --filter=tsconfig-reference generate-markdown
```

Validate the docs:

```sh
pnpm run --filter=tsconfig-reference test

# or to just run the linter without a build
pnpm run --filter=tsconfig-reference lint

# or to just one one linter for a single doc
pnpm run --filter=tsconfig-reference lint resolveJson
```

## Documentation

The docs for TypeScript. Originally ported over from [microsoft/TypeScript-Handbook](https://github.com/microsoft/TypeScript-Handbook/) then intermingled with [microsoft/TypeScript-New-Handbook](https://github.com/microsoft/TypeScript-New-Handbook).

## JSON Schema

It's a little odd, but the `tsconfig-reference` package creates the JSON schema for a TSConfig files:

```sh
pnpm run --filter=tsconfig-reference build
```

Then you can find it at: [`packages/tsconfig-reference/scripts/schema/result/schema.json`](packages/tsconfig-reference/scripts/schema/result/schema.json).

## Playground Handbook

The user-facing documentation for the Playground.

## Playground Examples

The code samples used in the Playground split across many languages.

# Infra Packages

Most of these packages use (a maintained [fork](https://github.com/weiran-zsd/dts-cli) of) [`tsdx`](https://tsdx.io).

## TS Twoslash

A code sample markup extension for TypeScript. Available on npm: [@typescript/twoslash](https://www.npmjs.com/package/@typescript/twoslash)

## TypeScript VFS

A comprehensive way to run TypeScript projects in-memory in a browser or node environment. Available on npm: [@typescript/vfs](https://www.npmjs.com/package/@typescript/vfs)

## Create Playground Plugin

A template for generating a new playground plugin which you can use via `npm init playground-plugin [name]`

## Community Meta

Generates contribution JSON metadata on who edited handbook pages.

## Playground Worker

A web worker which sits between the Playground and Monaco-TypeScript

# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Legal Notices

Microsoft and any contributors grant you a license to the Microsoft documentation and other content
in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode),
see the [LICENSE](LICENSE) file, and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the
[LICENSE-CODE](LICENSE-CODE) file.

Microsoft, Windows, Microsoft Azure and/or other Microsoft products and services referenced in the documentation
may be either trademarks or registered trademarks of Microsoft in the United States and/or other countries.
The licenses for this project do not grant you rights to use any Microsoft names, logos, or trademarks.
Microsoft's general trademark guidelines can be found at http://go.microsoft.com/fwlink/?LinkID=254653.

Privacy information can be found at https://privacy.microsoft.com/en-us/

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents,
or trademarks, whether by implication, estoppel or otherwise.
>>>>>>> 5a1a8cf30edfcf118b1935679ff8f4bb3e8552f8
