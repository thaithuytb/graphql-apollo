const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://thaingo:1234@literary.j2bq2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = { connectDB };