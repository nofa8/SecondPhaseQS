import { Hono } from 'hono'
import { createClient } from '@libsql/client/web'

type Bindings = {
  TURSO_URL: string
  TURSO_AUTH_TOKEN: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
  const turso = createClient({
    url: c.env.TURSO_URL,
    authToken: c.env.TURSO_AUTH_TOKEN,
  })

  const { rows } = await turso.execute(
    'SELECT audience FROM greetings ORDER BY id LIMIT 1'
  )
  const audience = (rows[0]?.audience as string) ?? 'world'

  return c.html(`<h1>Hello, ${audience}!</h1>`)
})

export default app