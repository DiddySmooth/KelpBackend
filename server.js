const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')

const routesReport = rowdy.begin(app)
const userRoutes = require('./routes/userRoutes')
const businessRoutes = require('./routes/businessRoutes')

app.use(express.json())

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})

app.use('/user', userRoutes)
app.use('/business', businessRoutes)
