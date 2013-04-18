# grunt-rev [![Build Status](https://travis-ci.org/causata/grunt-git-changedfiles.png)](https://travis-ci.org/causata/grunt-git-changedfiles)

> Detection of files that have been modified in a local git working tree

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-git-changedfiles --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-git-changedfiles');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

## The "git_changedfiles" task

Use the **git_changedfiles** task to detect which files in your local git working tree have been modified. This can then be used as a filter in other tasks.

