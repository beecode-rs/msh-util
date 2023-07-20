import { regexUtil } from '#/regex-util'

describe('regexUtil', () => {
	it.each([
		['00000000-0000-0000-0000-000000000000'],
		['b40c3094-a238-4c21-a744-f19b9e476abf'],
		['7d39e0a8-4ca2-41ff-9ded-312fb08f4dda'],
		['f9ea83de-c69f-42ff-8764-a6e88d59d75d'],
		['33f13db5-d427-4ea4-b028-6fc30a84d827'],
		['f04ec90e-2ff5-4b88-beb3-23b348b8e33b'],
		['83ad915b-645a-4132-b8c1-ab398701ba66'],
		['3510e9f1-08f6-4c5a-86a9-66e91c6093b7'],
		['02f243d8-3225-460b-9df7-30380d96971d'],
		['f27571d4-8c4a-4c9a-8899-932d0fa7a68c'],
		['b87a9f9c-c7c2-4aa2-85af-87221cebce9d'],
	])('%#. should pass regex expression check %s', (uuidString) => {
		expect(new RegExp(regexUtil.uuid).test(uuidString)).toBeTruthy()
	})
	it.each([['a'], ['test'], [123], [{}], [{ uuid: '3510e9f1-08f6-4c5a-86a9-66e91c6093b7' }], [new Date()]])(
		'%#. should pass regex expression check %s',
		(uuidString) => {
			expect(new RegExp(regexUtil.uuid).test(uuidString.toString())).toBeFalsy()
		}
	)
})
