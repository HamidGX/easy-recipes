'use client'

import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'

import RecipesCard from '@/components/recipes-card'

import { RecipesProps } from '@/lib/types'
import GetRecipes from '@/actions/get-recipes'

import { useSearchStore } from '@/store/useSearchStore'
import { useFavoritesStore } from '@/store/useFavoritesStore'

import { useEffect } from 'react'

export default function RecipeCard() {
	const searchQuery = useSearchStore((state) => state.searchQuery)

	const { isLoading, error, data, refetch, isRefetching } =
		useQuery<RecipesProps>({
			queryKey: ['RecipeCard', searchQuery],
			queryFn: async () => await GetRecipes(searchQuery),
			refetchOnWindowFocus: false,
		})

	useEffect(() => {
		if (searchQuery) {
			refetch()
		}
	}, [searchQuery, refetch])

	const { favorites, addFavorite, removeFavorite } = useFavoritesStore()

	const toggleFavorite = (recipe: RecipesProps['hits'][number]) => {
		if (favorites.some((fav) => fav.recipe.uri === recipe.recipe.uri)) {
			removeFavorite(recipe)
		} else {
			addFavorite(recipe)
		}
	}

	return (
		<>
			{isLoading || isRefetching ? (
				<div className='flex justify-center items-center min-h-screen'>
					<Loader2 className='w-12 h-12 animate-spin' />
				</div>
			) : data?.hits.length === 0 ? (
				<div className='flex text-2xl justify-center items-center min-h-screen'>
					<p>No results found for your search.</p>
				</div>
			) : (
				<div className='flex flex-1 flex-col gap-4 pt-4 md:gap-8 md:pt-8'>
					<div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
						{data?.hits.map((recipe, index) => {
							const isFavorite = favorites.some(
								(fav) => fav.recipe.uri === recipe.recipe.uri
							)
							return (
								<RecipesCard
									key={index}
									imageSrc={
										recipe.recipe?.images.LARGE?.url
											? recipe.recipe?.images.LARGE?.url
											: recipe.recipe?.images.REGULAR?.url || 'placeholder.svg'
									}
									title={recipe.recipe?.label || 'Not available'}
									cuisineType={
										recipe.recipe?.cuisineType[0]
											?.split(' ')
											.map(
												(word) =>
													word.charAt(0).toUpperCase() +
													word.slice(1).toLowerCase()
											)
											.join(' ') + ' Kitchen' || 'Not available'
									}
									dietLabel={recipe.recipe?.dietLabels[0] || 'Normal'}
									healthLabel={recipe.recipe?.healthLabels[0] || 'Normal'}
									isFavorite={isFavorite}
									onFavoriteToggle={() => toggleFavorite(recipe)}
								/>
							)
						})}
					</div>
				</div>
			)}
		</>
	)
}
