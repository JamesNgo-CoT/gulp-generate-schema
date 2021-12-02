const stream = require('stream');
const Vinyl = require('vinyl');

const nodeGenerateSchema = require('node-generate-schema')

class GenerateSchemasTransform extends stream.Transform {
  constructor(options, entities) {
    super(options);
    this.entities = entities;
  }

  _transform(file, encoding, callback) {
    const metadata = file.contents.toString('utf-8');

    for (let index = 0, length = this.entities.length; index < length; index++) {
      const entity = this.entities[index];
      this.push(new Vinyl({
        path: `dataaccess.${entity}.schema.json`,
        contents: Buffer.from(JSON.stringify(nodeGenerateSchema(metadata, entity)), 'utf-8')
      }));
    }

    callback();
  }
}

module.exports = function (...entities) {
  return new GenerateSchemasTransform({ objectMode: true }, entities);
};
