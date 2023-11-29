fx_version 'cerulean'
game 'gta5'

author "SpMex"
description 'V-Progressbar'
version '1.0.0'

ui_page "html/index.html"

client_script {
    'config.lua',
    'client/main.lua',
}

shared_script {
    'config.lua',
}

files {
    'html/index.html',
    'html/css/style.css',
    'html/js/script.js',
    'html/css/bootstrap.min.css',
    'html/js/jquery.min.js',
}

exports {
    'Progress',
    'ProgressWithStartEvent',
    'ProgressWithTickEvent',
    'ProgressWithStartAndTick',
    'isDoingSomething'
}

lua54 'yes'

escrow_ignore {
    'config.lua',
    'client/main.lua',
    'html/index.html',
    'html/css/style.css',
    'html/js/script.js',
    'html/css/bootstrap.min.css',
    'html/js/jquery.min.js',
}