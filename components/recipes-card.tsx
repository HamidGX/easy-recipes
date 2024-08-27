'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, ChefHat } from 'lucide-react'

interface CardProps {
	imageSrc: string
	title: string
	cuisineType: string
	dietLabel: string
	healthLabel: string
	isFavorite?: boolean
	onFavoriteToggle: () => void
}

export default function RecipeCard({
	imageSrc,
	title,
	cuisineType,
	dietLabel,
	healthLabel,
	isFavorite,
	onFavoriteToggle,
}: CardProps) {
	return (
		<Card className='w-full'>
			<div className='p-4'>
				<Image
					src={imageSrc}
					priority={true}
					alt={title}
					width={500}
					height={500}
					className='w-full h-auto max-h-[250px] cursor-pointer transition-opacity duration-500 rounded-sm hover:opacity-80'
				/>
			</div>
			<CardHeader className='p-4'>
				<CardTitle className='text-lg'>{title}</CardTitle>
			</CardHeader>
			<CardContent className='px-4'>
				<p className='text-base pb-4'>{cuisineType}</p>
				<div className='flex justify-between'>
					<div className='flex gap-4'>
						<Badge>
							<Heart className='inline-block mr-2 w-4 h-4' />
							{dietLabel}
						</Badge>
						<Badge className='hidden md:block'>
							<ChefHat className='inline-block mr-2 w-4 h-4' />
							{healthLabel}
						</Badge>
					</div>
					<div className='flex'>
						<Button
							variant='ghost'
							size='icon'
							onClick={onFavoriteToggle}
							className='w-full h-full'
						>
							<Heart
								className={`w-6 h-6 ${
									isFavorite
										? 'fill-red-700 text-red-700'
										: 'fill-muted stroke-muted-foreground'
								}`}
							/>
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
