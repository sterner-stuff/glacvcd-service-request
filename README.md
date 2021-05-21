# glacvcd-service-form

A Vue-driven web form designed to be embeded on the GLACVCD website and other places it may be required.

## Use

```
<div id="glacvcd-sr-form"></div>
<script src="/dist/js/chunk-vendors.js"></script>
<script src="/dist/js/app.js">
```

## Project setup

### Requirements

- Node
- NPM

### Setup

1. Clone this repository
2. Run `npm ci` to install dependencies. Use `npm update` if you need to update dependencies for some reason.

## Project Development

Most of the form lives in `src/App.vue`, but will occasionally reference other components.

The project comes with a node development server for convenient developing. It watches for changes and live reloads in your browser:

```
npm run serve
```

## Release a new version

Once you're satisfied with your changes, you can optionally lint and clean up files according to the included code style guide before you build for production:

```
npm run lint
```

Then compile and minify for production:

```
npm run build
```

In `package.json`, bump the version. Semantic versioning is encouraged, though not required. Then:

`git add . && git commit -m 'COMMIT MESSAGE' && git tag VERSION && git push`

Finally, update the embed code with the latest version to ensure visitors get the most updated form. Replace 'VERSION' in the below with the version you tagged:

```
<div id="glacvcd-sr-form"></div>
<script src="https://cdn.jsdelivr.net/gh/sterner-stuff/glacvcd-service-request@VERSION/dist/js/chunk-vendors.js"></script>
<script src="https://cdn.jsdelivr.net/gh/sterner-stuff/glacvcd-service-request@VERSION/dist/js/app.js"></script>
```


## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
