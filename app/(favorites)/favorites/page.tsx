import Header from '@/components/header'
import FavoriteRecipes from '../_componentes/favorites-recipes'

export default function FavoritesPages() {
	return (
		<div className='container mx-auto p-4'>
			<Header />
			<div className='container mx-auto py-8 px-4 justify-center '>
				<FavoriteRecipes />
			</div>
		</div>
	)
}
