
Experiment with NodeJS/Browser JavaScript directly in the browser

NodeNote is a notebook application with support for executing
JavaScript in NodeJS and browser environment. Similar to [iPython Notebook]

<!-- TOC depth:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [NodeNote](#nodenote)
		- [Plugins for data visualization](#plugins-for-data-visualization)
		- [Dynamically load npm packages](#dynamically-load-npm-packages)
		- [Save variables to next block](#save-variables-to-next-block)
		- [Time traveling](#time-traveling)
		- [Support the latest nodejs feature](#support-the-latest-nodejs-feature)
		- [Support any nodejs version](#support-any-nodejs-version)
		- [Support saving entire pages of executed scripts and output to IPFS and publish it](#support-saving-entire-pages-of-executed-scripts-and-output-to-ipfs-and-publish-it)
		- [100% offline support](#100-offline-support)
		- [VIM keybindings](#vim-keybindings)
		- [Open Source](#open-source)
		- [Blocks](#blocks)
<!-- /TOC --># NodeNote

MVP Features
------------

### Plugins for data visualization

The output of a InputPane should be able to be parsable by anything
chosen by the user or automagically set depending on the format of the
output. Obvious ones are HTML should be parsed, JSON should be showed
easily, GeoJSON should be showing on a map. Images should be showned.
And this should be able to be support via the community

### Dynamically load npm packages

Anyone should be able to do \`require('npm')\` and get that package,
even if not installed since before. \`require('npm@latest')\` and
\`require('npm@0.9.9')\` should work as well, to be able to load any
version

### Save variables to next block

You should be able to set the variables on the global scope and those
should be kept for the next block. So if in one block I do \`var a =
1\`, I should be able in the next block to do \`return a\` and be able
to see that \`a === 1\`

### Time traveling

When re-evaluating a block, the blocks after that should automatically
re-evaluate, allowing time travling.

### Support the latest nodejs feature

All the latest features from es6, es7, es8, esX should be automatically
support via a plugin system that can easily switched out.

### Support any nodejs version

Any version at all should be supported so people can try out the nightly
build of nodejs, or version 0.12.0, version 5.0.0 or whatever.

### Support saving entire pages of executed scripts and output to IPFS and publish it

A notebook should be able to be saved for later experiments but also
exported so everything is saved into a single index.html page and
automatically published to IPFS for easy sharing.

### 100% offline support

Everything except loading not-seen-before npm packages should be able to
load offline, no connectivity required.

### VIM keybindings

Support edit stuff by using Vim Keybindings

### Open Source

Open Source from the beginning, with organization and plugin system
setup from day one. For people to be able to follow the progress and to
built up hype in the very beginning. Organization and repositories
should be setup so people can easily just contribute to one part

Future features
---------------

-   Code completion
-   NPM packages from Github
-   NPM packages from local filesystem
-   Custom themes
-   Share notebooks that other people can “fork” via URL
-   REPL with ability to save current work into block
-   Pagination in notebooks
-   Expose a webserver via an InputBlock
-   Versions in notebooks
-   Diff for versions in notebooks
-   Custom “everywhere” script that runs globally in every notebook
-   Environment variables
-   Plugins (plugin everything!)
-   Support different languages in the InputBlocks (jsx,
    coffeescript, typescript)
-   Linking notebooks together, sharing the data from one to the other

Implemented features
--------------------

### Blocks

A *Block* is something you can add to a *Notebook*. A *Block* can be one
of these types:

-   *code* - Input with code that has a selectable output (right now
    just inspecting the output JSON)
-   *markdown* - Input with markdown that has HTML as a output

  [iPython Notebook]: http://ipython.org/notebook.html
