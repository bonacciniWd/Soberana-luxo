// node-polyfills.js
var nodeLibs = require('node-libs-browser');

// Escolha os módulos que você precisa polyfill
nodeLibs.http = require.resolve('stream-http');
nodeLibs.https = require.resolve('https-browserify');
nodeLibs.url = require.resolve('url');
nodeLibs.buffer = require.resolve('buffer');
nodeLibs.timers = require.resolve('timers-browserify');

global.process = {
  env: {},
};

// Adicione outros módulos essenciais, se necessário
nodeLibs.crypto = require.resolve('crypto-browserify');
nodeLibs.fs = 'empty';

// Exporte os módulos como globais para estar disponível em todo o código
global.Buffer = nodeLibs.buffer.Buffer;
global.process = nodeLibs.process;
global.setImmediate = nodeLibs.timers.setImmediate;

// Configure qualquer outro polyfill necessário

module.exports = nodeLibs;
