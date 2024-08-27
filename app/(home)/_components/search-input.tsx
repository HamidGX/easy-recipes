'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useState } from 'react'
import GetRecipes from '@/actions/get-recipes'

import { useSearchStore } from '@/store/useSearchStore'

const formSchema = z.object({
	recipe: z.string().min(1, 'Please enter a recipe.'),
})

export default function SearchInput() {
	const { setSearchQuery } = useSearchStore()
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			recipe: '',
		},
	})

	const handleSubmit = async (values: z.infer<typeof formSchema>) => {
		setIsLoading(true)
		try {
			setSearchQuery(values.recipe)
			const response = await GetRecipes(values.recipe)
			// console.log(response)
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={form.handleSubmit(handleSubmit)}>
			<div className='flex w-full items-center space-x-2'>
				<Input placeholder='Search a recipe' {...form.register('recipe')} />
				<Button type='submit' disabled={isLoading}>
					{isLoading ? 'Searching...' : 'Search'}
				</Button>
			</div>
		</form>
	)
}
