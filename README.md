# react-svg-progress
An indefinite circular progress inspired by Google's progress indicator. Based off of https://github.com/nathanhoad/react-loading-animation.

![Screeshot of React SVG Progress](https://i.imgur.com/WY1n56C.gif)

## Installation

With [Yarn](https://github.com/yarnpkg/yarn):

```shell
yarn install react-svg-progress
```

Or from [NPM](https://npmjs.com/package/react-svg-progress):

```shell
npm install react-svg-progress --save
```

## Importing

Import react-svg-progress via ES6 default import:

```js
import Progress from "react-svg-progress";
```

Or via Node's require:

```js
const Progress = require("react-svg-progress").default;
```

## Example

```js
import Progress from "react-svg-progress";

render() {
    return (
        <div>
            <div>
                {`40px:`}
                <Progress size={40} strokeWidth={7} />
            </div>
            <div>
                {`Green:`}
                <Progress size={40} color={"green"} />
            </div>
            <div>
                {`In Button:`}
                <button className={`btn blue`} >
                    <Progress size={15} margin={"0 5px 0 0"} color={`#ffffff`} />
                    {`Button Text`}
                </button>
            </div>
        </div>
    )
}
```

## Props

Note: react-svg-progress has full TypeScript definitions! You should automatically receive intellisense for all of the props documented below:

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `color` | string | false | `'#00bcd4'` | The progress indicator's color. Must be a valid CSS color string. |
| `size` | number or string | false | `16` | A number or string designating the size of the SVG. If a string, the property must be a valid CSS height and width value. |
| `margin` | string | false | `undefined` | A valid CSS margin string. |
| `strokeWidth` | number | false | 5 | Stroke width of the progress indicator. |