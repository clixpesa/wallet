import Constants from 'expo-constants'

import { Firebase } from './types'

const isExpoGo = Constants.appOwnership === 'expo'

let exports: Firebase

// Check if user has properly set up their native app
// if not, fallback to firebase JS

if (isExpoGo) {
  exports = require('./init.web')
} else {
  exports = require('./init.native')
}

module.exports = exports
