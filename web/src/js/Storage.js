import { Storage } from 'megajs'

const storage = new Storage({
  email: process.env.MEGA_EMAIL,
  password: process.env.MEGA_PASSWORD,
  userAgent: 'WebApp/1.0'
})

async function main () {
  await storage.ready
}

main()
