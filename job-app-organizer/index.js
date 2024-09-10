const express = require('express');
const app = express();
const path = require('path');


// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


const jobApplications = [
    {company: 'Company A', position: 'Software Developer', status: 'Applied'},
    {company: 'Company B', position: 'Designer', status: 'Interview Scheduled'},
    {company: 'Company C', position: 'Manager', status: 'Offer Received'}
];

//Route for the dashboard
app.get('/', (req, res) => {
    res.render('dashboard', { jobApplications });
});

//Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
