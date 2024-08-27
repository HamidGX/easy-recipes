'use client'

import { useFavoritesStore } from '@/store/useFavoritesStore'
import RecipesCard from '@/components/recipes-card'

export default function FavoriteRecipes() {
	const { favorites, removeFavorite } = useFavoritesStore()

	if (favorites.length === 0) {
		return (
			<p className='flex text-2xl justify-center items-center min-h-screen'>
				No favorites yet!
			</p>
		)
	}

	return (
		<div className='flex flex-1 flex-col gap-4 pt-4 md:gap-8 md:pt-8'>
			<div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
				{favorites.map((recipe, index) => (
					<RecipesCard
						key={index}
						imageSrc={
							recipe.recipe.images.LARGE?.url ||
							recipe.recipe.images.REGULAR?.url ||
							'placeholder.svg'
						}
						title={recipe.recipe.label || 'Not available'}
						cuisineType={
							recipe.recipe.cuisineType[0]
								?.split(' ')
								.map(
									(word) =>
										word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
								)
								.join(' ') + ' Kitchen' || 'Not available'
						}
						dietLabel={recipe.recipe.dietLabels[0] || 'Normal'}
						healthLabel={recipe.recipe.healthLabels[0] || 'Not available'}
						isFavorite={true}
						onFavoriteToggle={() => removeFavorite(recipe)}
					/>
				))}
			</div>
		</div>
	)
}
