'use strict';

require('./magic');

canIHazMagic('?'); /*
                    * // ./magic.js
                    *
                    * // this is super easy to understand right? (╯°□°)╯︵ ┻━┻
                    * global.canIHazMagic = s => s === '?' ? 'yes' : 'no'
                    */