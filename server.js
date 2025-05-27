// MIT Licensed - Created by CB𝑥.nz or cbgamesxyz
const express = require('express');
const path = require('path');
const open = require('open');
const chalk = require('chalk');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, async () => {
    const url = `http://localhost:${PORT}`;
    console.log(chalk.green.bold(`✅ Server is running at ${url}`));
    console.log(chalk.blue('🌐 Localhost Started'));
    await open(url);
});
