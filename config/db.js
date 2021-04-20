const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    // Putting in a try catch in case of an error we need a way to have it fail
    try {
        // Since mongoose returns a promise we want to put await in front
       await mongoose.connect(db, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,
           useFindAndModify: false
       });

       console.log('MongoDB Connect...')
    } catch(err) {
        console.log(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;