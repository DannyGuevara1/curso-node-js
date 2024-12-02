const fs = require('node:fs');

fs.readdir('./', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(files);
});
