import * as express from 'express'
import * as helmet from 'helmet'
import { readFileSync } from 'fs'
import Helpers from './helpers'

class Bootstrap {
  public app: express.Application;

  constructor() {
    this.app = express()
    this.routes()
  }

  routes() {
    this.app.route('/').get((req, res) => {
      return res.json({ version: '0.0.1' })
    })

    this.app.route('/quote').get((req, res) => {
      const rawQuotes = readFileSync('src/db/quotes.json')
      const quotes = JSON.parse(rawQuotes.toString())
      const index = Helpers.getRandonInRange(0, 366)
      return res.json(quotes[index])
    })
  }

  middlewares() {
    this.app.use(helmet())
  }
}

export default new Bootstrap()
