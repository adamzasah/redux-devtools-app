#! /usr/bin/env node
const electron = require('electron');
const childProcess = require('child_process');

childProcess.spawn(electron, [require.resolve('./app')]);
