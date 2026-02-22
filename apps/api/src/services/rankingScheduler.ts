const cron = require('node-cron');

// Schedule a task to run at 11:59 PM UTC every day
cron.schedule('59 23 * * *', () => {
    console.log('Running ranking updates...');
    // Add your ranking update logic here
});

module.exports = { scheduler: cron };