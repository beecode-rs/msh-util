import { regexUtil } from '#/regex-util.js'
import { stringUtil } from '#/string-util.js'

describe('stringUtil', () => {
	it.each([
		[stringUtil.generateUUID()],
		[stringUtil.generateUUID()],
		[stringUtil.generateUUID()],
		[stringUtil.generateUUID()],
		[stringUtil.generateUUID()],
		[stringUtil.generateUUID()],
		[stringUtil.generateUUID()],
		[stringUtil.generateUUID()],
		[stringUtil.generateUUID()],
	])('%#. should generate valid uuid %s', (uuid) => {
		expect(new RegExp(regexUtil.uuid).test(uuid)).toBeTruthy()
	})
})
