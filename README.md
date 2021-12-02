# gulp-generate-schema

## Install

```
npm install https://github.com/JamesNgo-CoT/gulp-generate-schema.git --save-dev
```

## Usage

``` JavaScript
const { dest, series, src } = require('gulp');

const del = require('del');

const gulpGenerateSchema

function clean() {
	return del('dist');
}

function test() {
	return src('metadata.json')
		.pipe();
}

module.export.default = series(clean, test);
```
