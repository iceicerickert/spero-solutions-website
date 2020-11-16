const functions = require('firebase-functions');
const prpl = require('prpl-server');
const express = require('express');
const rendertron = require('rendertron-middleware');
const hsts = require('hsts');

const app = express();

const rendertronMiddleware = rendertron.makeMiddleware({
  proxyUrl: 'https://render-tron.appspot.com/render',
  injectShadyDom: true,
});

app.use(hsts({
  maxAge: 31536000,
  includeSubDomains: true,
  preload: true
}),(req, res, next) => {
  req.headers['host'] = 'spero.solutions';
  return rendertronMiddleware(req, res, next);
});

app.get('/*', prpl.makeHandler('./build', require('./build/polymer.json')));

exports.app = functions
                .region('europe-west1')
                .https
                .onRequest(app);