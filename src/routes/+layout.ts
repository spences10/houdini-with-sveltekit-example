import { load_AllCharacters } from '$houdini'

export const load = async (event) => {
	return {
		...(await load_AllCharacters({ event })),
	}
}
