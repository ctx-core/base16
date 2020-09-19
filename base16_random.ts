export function base16_random(length = 5) {
	const value_a1 = [] as string[]
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const length__possible = possible.length
	for (let i = 0; i < length; i++) {
		value_a1.push(
			possible.charAt(
				Math.floor(Math.random() * length__possible))
		)
	}
	return value_a1.join('')
}
export const random__base16 = base16_random
