const { dest, series } = require('gulp');

const del = require('del');
const gulpHttpsRequest = require('gulp-https-request');

const gulpGenerateSchemas = require('./index');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

function clean() {
	return del('dist');
}

function test() {
	return gulpHttpsRequest.pluginSrc('metadata.json', {
    // REMOVE
    headers: { 'Accept': 'application/json' }
  })
    .pipe(dest('dist'))
    .pipe(gulpGenerateSchemas('Submissions'))
    .pipe(dest('dist'));
}

module.exports.default = series(clean, test);
