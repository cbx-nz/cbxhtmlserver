const express = require('express');
const path = require('path');
const chalk = require('chalk');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(indexPath, err => {
        if (err) {
            console.error(chalk.red(`Failed to send index.html: ${err.message}`));
            res.status(500).send('Internal Server Error');
        }
    });
});
app.listen(PORT, () => {
    console.log(chalk.green.bold(`✅ Server is running at http://localhost:${PORT}`));
});
