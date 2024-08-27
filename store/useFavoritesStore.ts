import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { RecipesProps } from '@/lib/types'

interface FavoritesState {
	favorites: RecipesProps['hits']
	addFavorite: (recipe: RecipesProps['hits'][number]) => void
	removeFavorite: (recipe: RecipesProps['hits'][number]) => void
}

export const useFavoritesStore = create<FavoritesState>()(
	persist(
		(set) => ({
			favorites: [],
			addFavorite: (recipe) =>
				set((state) => ({
					favorites: [...state.favorites, recipe],
				})),
			removeFavorite: (recipe) =>
				set((state) => ({
					favorites: state.favorites.filter(
						(fav) => fav.recipe.uri !== recipe.recipe.uri
					),
				})),
		}),
		{
			name: 'favorites-storage', // localStorage
		}
	)
)
