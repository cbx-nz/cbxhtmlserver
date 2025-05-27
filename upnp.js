// MIT Licensed - Created by CB𝑥.nz or cbgamesxyz
const express = require('express');
const path = require('path');
const chalk = require('chalk').default;
const upnp = require('nat-upnp');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const client = upnp.createClient();
client.portMapping({
    public: PORT,
    private: PORT,
    ttl: 3600,
    protocol: 'TCP',
    description: 'Node.js Express Server'
}, (err) => {
    if (err) {
        console.error(chalk.red('UPnP Port Mapping failed:'), err.message);
    } else {
        console.log(chalk.yellow(`UPnP Port ${PORT} mapped successfully.`));
    }
});

// Start server
app.listen(PORT, () => {
    console.log(chalk.green.bold(`Server is running at http://localhost:${PORT}`));
    console.log(chalk.blue(`localhost started`));
});
