import test from 'ava'
import generate from './support/generate'

test('foo', async t => {
  const $ = await generate('basic')
  t.snapshot($('article').html())
});


test('bar', async t => {
  const $ = await generate('basic2')
  t.snapshot($('article').html())
});
