[![NPM](https://nodei.co/npm/prettier-plugin-jsdoc.png)](https://nodei.co/npm/prettier-plugin-jsdoc/)

[![install size](https://packagephobia.now.sh/badge?p=prettier-plugin-jsdoc)](https://packagephobia.now.sh/result?p=prettier-plugin-jsdoc)
[![dependencies](https://david-dm.org/hosseinmd/prettier-plugin-jsdoc.svg)](https://david-dm.org/hosseinmd/prettier-plugin-jsdoc.svg)

![Prettier Banner](https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png)

# prettier-plugin-jsdoc

Prettier plugin for format jsdoc and convert to standard
Match with Visual studio and other IDE which support jsdoc.

Many good examples of how this plugin work, are in tests directory.
Compare tests and their snapshot

configured with best practices of jsDoc style guides

## TOC

- [Installation](#Installation)
- [Examples](#Examples)
- [Links](#Links)
- [Options](#Options)

## Installation

1. Install and configure Prettier as usual
2. Install prettier-plugin-jsdoc

```npm
npm i prettier-plugin-jsdoc --save
```

```yarn
yarn add prettier-plugin-jsdoc
```

## Config

.prettierrc

```json
{
  //any other config you have
  "jsdocParser": true, // default is true, format all javascript and typescript files
};
```

If you want ignore some type of files set jsdocParser to false

```.prettierrc.js
module.exports = {
  // any other config you have
  overrides: [
    {
      files: '*.tsx',
      options: {
        jsdocParser: false
      },
    },
  ],
};
```

## Examples

#### Single line

```js
/**
 * @param {  string   }    param0 description
 */
function fun(param0) {}
```

Format to

```js
/** @param {string} param0 Description */
function fun(param0) {}
```

#### React Component

```js
/**
 * @type {React.FC<{   message:string}   >}
 */
const Component = memo(({ message }) => {
  return <p>{message}</p>;
});
```

Format to

```js
/** @type {React.FC<{message: string}>} */
const Component = memo(({ message }) => {
  return <p>{message}</p>;
});
```

#### Typescript Objects

```js
/**
 @typedef {
    {
        "userId": {
        "profileImageLink": *,
        "isBusinessUser": "isResellerUser"|"isBoolean"|  "isSubUser" |    "isNot",
        "shareCode": number,
        "referredBy": any,
        },
        id:number
      }
     } User
     */
```

Format to

```js
/**
 * @typedef {{
 *   userId: {
 *     profileImageLink: any;
 *     isBusinessUser: "isResellerUser" | "isBoolean" | "isSubUser" | "isNot";
 *     shareCode: number;
 *     referredBy: any;
 *   };
 *   id: number;
 * }} User
 */
```

#### Example

Add code to example tag

```js
/**
 * @examples
 *   var one= 5
 *   var two=10
 *
 *   if(one > 2) { two += one }
 */
```

to

```js
/**
 * @example
 *   var one = 5;
 *   var two = 10;
 *
 *   if (one > 2) {
 *     two += one;
 *   }
 */
```

#### Description

```js
/**
 * This format of the description is being supported now:
 *
 *    1. Thing 1
 *    2. Thing 2
 *    3. Thing 3
 */
```

## Options

| Key                               | type    | Default |
| :-------------------------------- | :------ | :------ |
| jsdocParser                       | Boolean | true    |
| jsdocSpaces                       | Number  | 1       |
| jsdocDescriptionWithDot           | Boolean | false   |
| jsdocDescriptionTag               | Boolean | false   |
| jsdocVerticalAlignment            | Boolean | false   |
| jsdocKeepUnParseAbleExampleIndent | Boolean | true    |

Full up to date list and description of options can be found in Prettier help. First install plugin then run Prettier with "--help" option.

`$ prettier --help` # global installation

`$ ./node_modules/.bin/prettier --help` # local installation

## Contribute

Initial source code (https://gitlab.com/gumen/prettier-plugin-jsdoc)

## Links

[Prettier](https://prettier.io)

[JSDoc](https://jsdoc.app)
