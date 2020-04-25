/**
 * Firebase cloud function to re-render nuxt app
 * each time on http request.
 *
 * Credit: https://github.com/davidroyer/nuxt-ssr-firebase
 */
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')

const app = express()

const config = {
  /**
   * Development mode
   */
  dev: false
}

const nuxt = new Nuxt(config)

// Taken from: https://github.com/nuxt/nuxt.js/issues/5377#issuecomment-479371915
let isReady = false
const readyPromise = nuxt
  .ready()
  .then(() => {
    isReady = true
  })
  .catch(() => {
    process.exit(1)
  })

async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise
  }
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  await nuxt.render(req, res)
}

app.use(handleRequest)

exports.nuxtssr = functions.https.onRequest(app)
