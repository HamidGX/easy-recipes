import Header from '@/components/header'

import HomeRecipes from './_components/home-recipes'
import SearchInput from './_components/search-input'

export default function PageHome() {
	return (
		<div className='container mx-auto p-4'>
			<Header />
			<div className='container mx-auto py-8 px-4 justify-center '>
				<SearchInput />
				<HomeRecipes />
			</div>
		</div>
	)
}
