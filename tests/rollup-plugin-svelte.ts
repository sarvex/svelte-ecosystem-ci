import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/rollup-plugin-svelte',
		branch: 'master',
		test: 'test',
	})
}
