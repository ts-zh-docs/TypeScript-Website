## TypeScript 中文文档构建仓库

根据 [TypeScript WebSite 社区提出的计划](https://github.com/microsoft/TypeScript-Website/issues/2804)，官方本地化工作即将停止。所以我希望在这里继续简体中文本地化的工作。

目前为了保持稳定，我们仍然采取原有的本地化方式进行构建，即在本仓库触发 Vercel 的构建。而在 [ts-zh-docs/TypeScript-zh-Website](https://github.com/ts-zh-docs/TypeScript-zh-Website) 进行更新。一切有关翻译的讨论都将移至那个仓库，本仓库只负责构建工作。中文文档的地址目前可以访问[这里](https://ts-zh-docs.vercel.app/zh)。

本地开发环境构建步骤：

1. 使用 Node 16.x 版本。
2. 使用 `yarn` 命令安装依赖。

```shell
yarn docs-sync pull ts-zh-docs/TypeScript-zh-Website#main 1 
yarn bootstrap
yarn start
```

本地生产环境构建步骤：

环境同上。

直接运行 `yarn run build-and-deploy`，可以去 [`package.json`](https://github.com/ts-zh-docs/TypeScript-Website/blob/v2/package.json#L48) 中查看细节。
