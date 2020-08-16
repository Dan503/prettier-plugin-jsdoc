import {
  ABSTRACT,
  ASYNC,
  AUGMENTS,
  AUTHOR,
  CALLBACK,
  CATEGORY,
  CLASS,
  CONSTANT,
  DEFAULT,
  DEPRECATED,
  DESCRIPTION,
  EXAMPLE,
  EXTENDS,
  EXTERNAL,
  FILE,
  FIRES,
  FUNCTION,
  MEMBER,
  MEMBEROF,
  PARAM,
  PRIVATE,
  PROPERTY,
  RETURNS,
  SEE,
  SINCE,
  TEMPLATE,
  THROWS,
  TODO,
  TYPE,
  TYPEDEF,
  VERSION,
  YIELDS,
} from "./tags";
import { jsdocParser } from "./parser";
const {
  parsers: { "babel-ts": babelTs },
} = require("prettier/parser-babel");

// jsdoc-parser
export const languages = [
  {
    name: "JavaScript",
    parsers: ["jsdoc-parser"],
  },
];

export const parsers = {
  "jsdoc-parser": { ...babelTs, parse: jsdocParser },
};

export const options = {
  jsdocSpaces: {
    type: "int",
    category: "jsdoc",
    default: 1,
    description: "How many spaces will be used to separate tag elements.",
  },
  jsdocTagsOrder: {
    type: "path",
    category: "jsdoc",
    array: true,
    default: [
      {
        value: [
          ASYNC,
          PRIVATE,
          MEMBEROF,
          VERSION,
          AUTHOR,
          DEPRECATED,
          SINCE,
          CATEGORY,
          DESCRIPTION,
          EXAMPLE,
          ABSTRACT,
          AUGMENTS,
          CONSTANT,
          DEFAULT,
          EXTERNAL,
          FILE,
          FIRES,
          TEMPLATE,
          FUNCTION,
          CLASS,
          TYPEDEF,
          TYPE,
          CALLBACK,
          PROPERTY,
          PARAM,
          EXTENDS,
          MEMBER,
          SEE,
          "other",
          THROWS,
          YIELDS,
          RETURNS,
          TODO,
        ],
      },
    ],
    description: "Define order of tags.",
  },
  jsdocDescriptionWithDot: {
    type: "boolean",
    category: "jsdoc",
    default: false,
    description: "Should dot be inserted at the end of description",
  },
  jsdocDescriptionTag: {
    type: "boolean",
    category: "jsdoc",
    default: false,
    description: "Should description tag be used",
  },
  jsdocVerticalAlignment: {
    type: "boolean",
    category: "jsdoc",
    default: false,
    description: "Should tags, types, names and description be aligned",
  },
  jsdocKeepUnParseAbleExampleIndent: {
    type: "boolean",
    category: "jsdoc",
    default: false,
    description:
      "Should unParseAble example (pseudo code or no js code) keep its indentation",
  },
};

export const defaultOptions = {
  jsdocSpaces: 1,
  jsdocDescriptionWithDot: false,
  jsdocDescriptionTag: false,
  jsdocVerticalAlignment: false,
  jsdocKeepUnParseAbleExampleIndent: false,
};