<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Andika William </title>
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  About Me
                </a>
                <a class="navbar-item">
                  Portfolio
                </a>
                <span class="navbar-item">
                  <a class="button is-info is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Github</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Title
          </p>
          <p class="subtitle">
            Subtitle
          </p>
        </div>
      </div>

    </section>
    <hr>

    <section class="section has-text-centered">
      <div class="container">
        <div class="columns">
          <div class="column is-8-desktop is-offset-2-desktop">
            <div class="content">
              <h3>About Me</h3>
              <p>
                The <code>npm</code> dependencies included in <code>package.json</code> are:
              </p>
              <ul>
                <li>
                  <code><a href="https://github.com/jgthms/bulma">bulma</a></code>
                </li>
                <li>
                  <code><a href="https://github.com/sass/node-sass">node-sass</a></code> to compile your own Sass file
                </li>
                <li>
                  <code><a href="https://github.com/postcss/postcss-cli">postcss-cli</a></code> and <code><a href="https://github.com/postcss/autoprefixer">autoprefixer</a></code> to add support for older browsers
                </li>
                <li>
                  <code><a href="https://babeljs.io/docs/usage/cli/">babel-cli</a></code>,
                  <code><a href="https://github.com/babel/babel-preset-env">babel-preset-env</a></code>
                  and
                  <code><a href="https://github.com/jmcriffey/babel-preset-es2015-ie">babel-preset-es2015-ie</a></code>
                  for compiling ES6 JavaScript files
                </li>
              </ul>
              <p>
                Apart from <code>package.json</code>, the following files are included:
              </p>
              <ul>
                <li>
                  <code>.babelrc</code> configuration file for <a href="https://babeljs.io/">Babel</a>
                </li>
                <li>
                  <code>.gitignore</code> common <a href="https://git-scm.com/">Git</a> ignored files
                </li>
                <li>
                  <code>index.html</code> this HTML5 file
                </li>
                <li>
                  <code>_sass/main.scss</code> a basic SCSS file that <strong>imports Bulma</strong> and explains how to <strong>customize</strong> your styles, and compiles to <code>css/main.css</code>
                </li>
                <li>
                  <code>_javascript/main.js</code> an ES6 JavaScript that compiles to <code>lib/main.js</code>
                </li>
              </ul>
              <h3>Try it out!</h3>
              <p>
                To see if your setup works, follow these steps:
              </p>
              <ol>
                <li>
                  <p>
                    <strong>Move</strong> to this directory:
                    <br>
                    <pre><code>cd bulma-start</code></pre>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Install</strong> all dependencies:
                    <br>
                    <pre><code>npm install</code></pre>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Start</strong> the CSS and JS watchers:
                    <br>
                    <pre><code>npm start</code></pre>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Edit</strong> <code>_sass/main.scss</code> by adding the following rule at the <strong>end</strong> of the file:
                    <br>
                    <pre><span style="color: #22863a;">html</span> {
  <span style="color: #005cc5;"><span style="color: #005cc5;">background-color</span></span>: <span style="color: #24292e">$green</span>;
}</pre>
                  </p>
                </li>
              </ol>
              <p>
                The page background should turn <strong class="has-text-success">green</strong>!
              </p>
              <h3>Get started</h3>
              <p>
                You're <strong>ready</strong> to create your own designs with Bulma. Just edit or duplicate this page, or simply create a new one!
                <br>
                For example, this page is <strong>only</strong> built with the following <strong>Bulma elements</strong>:
              </p>
            </div>
            <table class="table is-bordered is-fullwidth">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>CSS class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Columns</th>
                  <td>
                    <code><a href="http://bulma.io/documentation/columns/basics">columns</a></code>
                    <code><a href="http://bulma.io/documentation/columns/basics">column</a></code>
                  </td>
                </tr>
                <tr>
                  <th>Layout</th>
                  <td>
                    <code><a href="http://bulma.io/documentation/layout/section">section</a></code>
                    <code><a href="http://bulma.io/documentation/layout/container">container</a></code>
                    <code><a href="http://bulma.io/documentation/layout/footer">footer</a></code>
                  </td>
                </tr>
                <tr>
                  <th>Elements</th>
                  <td>
                    <code><a href="http://bulma.io/documentation/elements/button">button</a></code>
                    <code><a href="http://bulma.io/documentation/elements/content">content</a></code>
                    <code><a href="http://bulma.io/documentation/elements/title">title</a></code>
                    <code><a href="http://bulma.io/documentation/elements/title">subtitle</a></code>
                  </td>
                </tr>
                <tr>
                  <th>Form</th>
                  <td>
                    <code><a href="http://bulma.io/documentation/form/general">field</a></code>
                    <code><a href="http://bulma.io/documentation/form/general">control</a></code>
                  </td>
                </tr>
                <tr>
                  <th>Helpers</th>
                  <td>
                    <code><a href="http://bulma.io/documentation/modifiers/typography-helpers/">has-text-centered</a></code>
                    <code><a href="http://bulma.io/documentation/modifiers/typography-helpers/">has-text-weight-semibold</a></code>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="content">
              <p>
                If you want to <strong>learn more</strong>, follow these links:
              </p>
            </div>
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-medium is-primary" href="http://bulma.io">
                  <strong class="has-text-weight-semibold">Bulma homepage</strong>
                </a>
              </p>
              <p class="control">
                <a class="button is-medium is-link" href="http://bulma.io/documentation/overview/start/">
                  <strong class="has-text-weight-semibold">Documentation</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">

    </section>
    <footer class="footer has-text-centered">
      <div class="container">
         <div class="columns">
          <div class="column is-8-desktop is-offset-2-desktop">
            <p>
              <strong class="has-text-weight-semibold">
                <a href="https://www.npmjs.com/package/bulma-start">bulma-start@0.0.4</a>
              </strong>
            </p>
            <p>
              <small>
                Source code licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
              </small>
            </p>
            <p style="margin-top: 1rem;">
              <a href="http://bulma.io">
                <img src="made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    <script type="text/javascript" src="lib/main.js"></script>
  </body>
</html>
