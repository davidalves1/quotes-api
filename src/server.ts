import Bootstrap from './bootstrap'

const PORT = process.env.PORT || 8080

Bootstrap.app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`)
})
