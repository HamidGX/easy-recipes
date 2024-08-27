import { RecipesProps } from '@/lib/types'

export default async function GetRecipes(query: any): Promise<RecipesProps> {
	try {
		const response = await fetch(
			`https://api.edamam.com/api/recipes/v2/?app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAN_APP_KEY}&q=${query}&type=public`
		)
		const data = await response.json()
		return data as RecipesProps
	} catch (error) {
		console.log('[GET_RECIPES_ERROR]:', error)
		return {} as RecipesProps
	}
}
