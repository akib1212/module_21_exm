const mongoose = require('mongoose');
const app = require('./app');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/userRegistration')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
    
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});