// Packages
import test from 'ava'

// Root
import m from '.'

test('get ping', async t => {
  const result = await m('192.69.96.1')
  t.truthy(result)
})

test('fail ping', async t => {
  const error = await t.throwsAsync(m('1'))
  t.is(error.message, 'Could not reach servers')
})
