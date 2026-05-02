# bsts

Maybe this is a strange way to generate HTML, but it is the way I learn.
This library is meant to create Bootstrap 5.3 HTML in a TypeScript-friendly way.
It exists because the author prefers writing scripts instead of writing raw HTML, so everything becomes script.
Whenever Bootstrap changes, many things also change, so I built this library to keep the core generation in one place and update it for the latest Bootstrap version.

## What is bsts?

`bsts` is a small TypeScript-first library for generating Bootstrap HTML using typed component builders. It allows you to construct Bootstrap markup programmatically with a builder-like API.

## Project structure

The repository has a clear split between source, build output, and package metadata.

```text
bsts/
├── build/
│   ├── cjs/
│   ├── esm/
│   └── types/
├── scripts/
│   ├── clean.cjs
│   └── esm-package-json.cjs
├── src/
│   ├── core/
│   ├── html/
│   ├── bootstrap/
│   ├── interface/
│   └── index.ts
├── package.json
├── tsconfig.json
├── tsconfig.cjs.json
├── tsconfig.esm.json
└── README.md
```

## Why ESM?

This package is authored in TypeScript and built for modern ESM output by default.
- `package.json` exports an ESM entrypoint at `./build/esm/index.js`
- It also provides a CommonJS fallback under `./build/cjs/index.js`
- Source files use `.js` import specifiers because the runtime output expects `.js` paths

That means the library is compatible with modern bundlers and native ESM consumers while still supporting CJS users through the published build.

## Install

```bash
pnpm install
```

## Usage

```ts
import { core, b, h } from "@printf83/bsts";

core.documentReady(() => {
  const body = document.getElementById("main") as Element;
  core.replaceChild(
    body,
    new h.div([
      new h.p("This is example p tag"),
      new h.p(
        { lead: true, data: { test: "test-data" } },
        "This is example p tag with attribute"
      ),
      new b.button({ id: "btn1", color: "primary" }, "Button"),
    ])
  );
});
```

## Public API

Import the public namespaces from `@printf83/bsts`:

```ts
import { core, c, t, s, h, b, I } from "@printf83/bsts";
```

- `core` / `c`
  - runtime utilities: `documentReady`, `appendChild`, `prependChild`, `replaceChild`, `replaceWith`, `removeElement`, `getHtml`, `getNode`, `build`
  - tag helpers: `tag`, `html`, `tagConstructor`, `tagConstructorNoElement`, `tagConstructorArgs`, `tagConstructorArgsNoElement`
  - Bootstrap helpers: `bsConstructorNoElement`, `bsConstructor`, `bsConstructorMultiTag`, `BsConstructorArg`, `BsConstructorNoElementArg`, `BsConstructorMultiTagArg`
  - utilities: `addEvent`, `removeEvent`, `placeholder`, `mergeObject`, `mergeAttr`, `mergeClass`, `addClassIntoElement`, `camel2Dash`, `elemInfo`, `UUID`, `requestIdleCallback`, `observeResizeObserver`, `disconnectResizeObserver`, `RGBToHex`, `getCSSVar`, `setCSSVar`, `accentColor`, `dataManager`, `isAttr`, `isTag`, `isHtml`

- `h`
  - HTML tag constructors: `a`, `abbr`, `address`, `area`, `article`, `aside`, `audio`, `b`, `base`, `bdi`, `bdo`, `blockquote`, `body`, `br`, `button`, `canvas`, `caption`, `cite`, `code`, `col`, `colgroup`, `data`, `datalist`, `dd`, `del`, `details`, `dfn`, `dialog`, `div`, `dl`, `dt`, `em`, `embed`, `fieldset`, `figcaption`, `figure`, `footer`, `form`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `head`, `header`, `hr`, `i`, `iframe`, `img`, `input`, `ins`, `kbd`, `label`, `legend`, `li`, `link`, `main`, `map`, `mark`, `menu`, `meta`, `meter`, `nav`, `noscript`, `obj`, `ol`, `optgroup`, `option`, `output`, `p`, `param`, `picture`, `pre`, `progress`, `q`, `rp`, `rt`, `ruby`, `s`, `samp`, `script`, `section`, `select`, `small`, `source`, `span`, `strong`, `style`, `sub`, `summary`, `sup`, `table`, `tbody`, `td`, `template`, `textarea`, `tfoot`, `th`, `thead`, `time`, `title`, `tr`, `track`, `u`, `ul`, `variable`, `video`, `wbr`

- `b`
  - Bootstrap component constructors: `blockquote`, `figure`, `form`, `icon`, `button`, `label`, `caption`, `msg`, `alert`, `img`, `row`, `col`, `grid`, `container`, `input`, `btnclose`, `select`, `textarea`, `dropdown`, `btngroup`, `inputgroup`, `formfloating`, `card`, `collapse`, `list`, `tabList`, `badge`, `visuallyhidden`, `nav`, `modal`, `toast`, `progress`, `popover`, `tooltip`, `offcanvas`, `navbar`, `breadcrumb`, `accordion`, `carousel`, `pagination`, `pill`, `table`, `scrollspy`, `verticalrule`, `spinner`, `timer`, `ul`, `initTimer`, `calendar`

- `I`
  - interface namespaces: `I.h`, `I.b`, `I.c`, and `I.core`

## How to build

Compile the library and prepare the package metadata using:

```bash
pnpm run build
```

For development, you can also run:

```bash
pnpm run compile
pnpm run rebuild
pnpm run clean
```

## Available scripts

- `pnpm run lint` — run ESLint over the source
- `pnpm run compile` — compile TypeScript for CJS, ESM, and types
- `pnpm run build` — compile and prepare the package manifest
- `pnpm run rebuild` — clean + compile + prepare
- `pnpm demo` — serve `demo.html` locally for browser testing

## Notes

- `src/` contains the source TypeScript implementation
- `build/esm/` contains the ESM runtime build
- `build/cjs/` contains the CommonJS runtime build
- `build/types/` contains generated TypeScript declarations

Check [bsts testing website](https://printf83.github.io/bsts-test/) or [GitHub](https://github.com/printf83/bsts-test) for more example code.

Update : 1/5/2026