var fs = require('fs')
var json2scss = require('json2scss-map')
// import data from "../../../apps/guide/src/data"

fs.copyFile('tokens/_colors.json', '../../apps/guide/src/data/colors.json', err => {
  if (err) {
    console.log('Error Found:', err)
  } else {
    console.log('Copied succesfully:')
  }
})

fs.createReadStream('tokens/_colors.json')
  .pipe(
    json2scss({
      prefix: '$colors: ',
      cl4Syntax: true,
    })
  )
  .pipe(fs.createWriteStream('scss/library/tokens/_colors.scss'))
