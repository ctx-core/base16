import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { base16_random } from './index'
test('base16_random', ()=>{
	equal(typeof base16_random(), 'string')
	equal(base16_random().length > 1, true)
})
test.run()