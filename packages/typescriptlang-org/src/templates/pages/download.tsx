import * as React from "react"
import { Intl } from "../../components/Intl"
import { createIntlLink } from "../../components/IntlLink"
import { Layout } from "../../components/layout"
import { QuickJump } from "../../components/QuickJump"
import releaseInfo from "../../lib/release-info.json"


type Props = {
  pageContext: any
  b: NewableFunction
}

const changeExample = (code: string) => document.getElementById("code-example")!.textContent = code
const changeExample2 = (code: string) => document.getElementById("code-run")!.textContent = code

const Index: React.FC<Props> = (props) => {
  const Link = createIntlLink(props.pageContext.lang)

  return <Layout title="如何设置 TypeScript" description="将 TypeScript 添加到你的项目中，或者全局安装 TypeScript" lang={props.pageContext.lang}>
    <div className="raised main-content-block">
      <h1>下载 TypeScript</h1>
      <p>根据你打算如何使用 TypeScript，可以通过三种安装方式进行安装：npm 模块、NuGet 包或 Visual Studio 扩展。</p>
      <p>如果你正在使用 Node.js，你需要选择 npm 版本。如果你的项目使用 MSBuild，则需要选择 NuGet 包或 Visual Studio 扩展。</p>
    </div>

    <div className="raised main-content-block">
      <h2>在你的项目中使用 TypeScript</h2>
      <p>在每个项目中依次设置 TypeScript 可以让你的每个项目都可以使用不同版本的 TypeScript，这样可以保持每个项目的一致性。</p>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ borderRight: "1px lightgrey solid", padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>通过 npm 安装</h3>
          <p>TypeScript 可以作为<a href="https://www.npmjs.com/package/typescript">npm 注册表上的包</a>，名称为<code>“typescript”</code>。</p>
          <p>您需要一个<a title="链接到 node.js 项目" href="https://nodejs.org/en/">Node.js</a>作为运行该包的环境。然后，您可以使用像<a title="链接到 npm 包管理器" href='https://www.npmjs.com/'>npm</a>、<a title="链接到 yarn 包管理器" href='https://yarnpkg.com/'>yarn</a>或<a title="链接到 pnpm 包管理器" href='https://pnpm.js.org/'>pnpm</a>这样的依赖管理器将 TypeScript 下载到您的项目中。</p>
          <div>
            <code id='code-example'>npm install typescript --save-dev</code><br /><br />
            <button onClick={() => changeExample("npm install typescript --save-dev")}>npm</button> <button onClick={() => changeExample("yarn add typescript --dev")}>yarn</button> <button onClick={() => changeExample("pnpm add typescript -D")}>pnpm</button>
          </div>
          <p>所有这些依赖管理器都支持锁定文件，确保团队中的每个人都使用相同版本的语言。然后，您可以使用以下命令之一运行TypeScript编译器：</p>
          <div>
            <code id='code-run'>npx tsc</code><br /><br />
            <button onClick={() => changeExample2("npx tsc")}>npm</button> <button onClick={() => changeExample2("yarn tsc")}>yarn</button> <button onClick={() => changeExample2("pnpm tsc")}>pnpm</button>
          </div>
        </div>

        <div style={{ padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>使用Visual Studio</h3>
          <p>对于大多数项目类型，您可以在 NuGet 中将 TypeScript 作为软件包获取，例如 ASP.NET Core 应用程序。</p>
          <p>When using Nuget, you can <a href="https://learn.microsoft.com/visualstudio/javascript/tutorial-aspnet-with-typescript">install TypeScript through Visual Studio</a> using:</p>
          <ul>
            <li>
              The Manage NuGet Packages window (which you can get to by right-clicking on a project node)
            </li>
            <li style={{ marginTop: "20px" }}>
              The Nuget Package Manager Console (found in Tools &gt; NuGet Package Manager &gt; Package Manager Console) and then running:<br /><code style={{ fontSize: "14px" }}>Install-Package Microsoft.TypeScript.MSBuild</code>
            </li>
          </ul>
          <p>For project types which don't support Nuget, you can use the <a href={releaseInfo.vs.stable.vs2019_download}> TypeScript Visual Studio extension</a>. You can <a href="https://learn.microsoft.com/visualstudio/ide/finding-and-using-visual-studio-extensions">install the extension</a> using <code>Extensions &gt; Manage Extensions</code> in Visual Studio.</p>
        </div>
      </section>
    </div >

    <div className="main-content-block" style={{ textAlign: "center" }}>
      <p>The examples below are for more advanced use cases.</p>
    </div>

    <div className="raised main-content-block">
      <h2>Globally Installing TypeScript</h2>
      <p>It can be handy to have TypeScript available across all projects, often to test one-off ideas. Long-term, codebases should prefer a project-wide installation over a global install so that they can benefit from reproducible builds across different machines.</p>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ borderRight: "1px lightgrey solid", padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>via npm</h3>
          <p>You can use npm to install TypeScript globally, this means that you can use the <code>tsc</code> command anywhere in your terminal.</p>
          <p>To do this, run <code>npm install -g typescript</code>. This will install the latest version (currently {releaseInfo.tags.stableMajMin}).</p>
        </div>

        <div style={{ padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>via Visual Studio Marketplace</h3>
          <p>You can install TypeScript as a Visual Studio extension, which will allow you to use TypeScript across many MSBuild projects in Visual Studio.</p>
          <p>The latest version is available <a href={releaseInfo.vs.stable.vs2019_download} title="Link to the Visual Studio Marketplace for the TypeScript MSBuild extension">in the Visual Studio Marketplace</a>.</p>
        </div>
      </section>
    </div>


    <div className="raised main-content-block">
      <h2>Working with TypeScript-compatible transpilers</h2>
      <p>There are other tools which convert TypeScript files to JavaScript files. You might use these tools for speed or consistency with your existing build tooling.</p>
      <p>Each of these projects handle the file conversion, but do not handle the type-checking aspects of the TypeScript compiler. So it's likely that you will still need to keep the above TypeScript dependency around, and you will want to enable <Link to="/tsconfig#isolatedModules"><code>isolatedModules</code></Link>.</p>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ borderRight: "1px lightgrey solid", padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>Babel</h3>
          <p><a href='https://babeljs.io/'>Babel</a> is a very popular JavaScript transpiler which supports TypeScript files via the plugin <a href='https://babeljs.io/docs/en/babel-preset-typescript#docsNav'>@babel/plugin-transform-typescript</a>.</p>
        </div>

        <div style={{ borderRight: "1px lightgrey solid", padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>swc</h3>
          <p><a href='https://swc-project.github.io/docs/installation/'>swc</a> is a fast transpiler created in Rust which supports many of Babel's features including TypeScript.</p>
        </div>

        <div style={{ padding: "1rem", flex: 1, minWidth: "240px" }}>
          <h3>Sucrase</h3>
          <p><a href='https://github.com/alangpierce/sucrase#sucrase/'>Sucrase</a> is a Babel fork focused on speed for using in development mode. Sucrase supports TypeScript natively.</p>
        </div>
      </section>
    </div>

    <QuickJump title="Next Steps" lang={props.pageContext.lang} />
  </Layout>
}

export default (props: Props) => <Intl locale={props.pageContext.lang}><Index {...props} /></Intl>
