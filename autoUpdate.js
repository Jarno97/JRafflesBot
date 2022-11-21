const AutoGitUpdate = require('auto-git-update');

const config = {
    repository: 'https://github.com/Jarno97/JRafflesBot',
    fromReleases: false,
    tempLocation: 'C:/temp/jraffles',
    executeOnComplete: 'JRaffles.exe',
    exitOnComplete: true
}

const updater = new AutoGitUpdate(config);

updater.autoUpdate();