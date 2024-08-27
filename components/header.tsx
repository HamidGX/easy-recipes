'use client'

import Link from 'next/link'

import { Pizza, Home, Menu, Heart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'

export default function Header() {
	const pathname = usePathname()

	return (
		<header className='sticky top-0 flex h-16 items-center justify-between gap-4 px-4 bg-background-body z-[49]'>
			<div className='flex'>
				<div className='flex items-center gap-4 pr-4'>
					<Link href='/'>
						<Pizza className='h-6 w-6' />
					</Link>
					<p className='text-lg'>Recipes</p>
				</div>
				<nav className='hidden flex-col gap-4 text-lg font-medium text-center md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
					<Link
						href='/'
						className={`transition-colors hover:text-foreground ${
							pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
						}`}
					>
						Home
					</Link>
					<Link
						href='/favorites'
						className={`transition-colors hover:text-foreground ${
							pathname === '/favorites'
								? 'text-foreground'
								: 'text-muted-foreground'
						}`}
					>
						Favorites
					</Link>
				</nav>
			</div>
			<div className='flex gap-2'>
				<div className='flex items-center'>
					<ModeToggle />
				</div>

				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant='outline'
							size='icon'
							className='shrink-0 md:hidden'
						>
							<Menu className='h-5 w-5' />
							<span className='sr-only'>Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='left' className='flex flex-col'>
						<nav className='grid gap-2 text-lg font-medium'>
							<Link
								href='#'
								className='flex items-center gap-2 text-lg font-semibold pb-4'
							>
								<Pizza className='h-6 w-6' />
								<p className='text-lg'>Recipes</p>
							</Link>
							<Link
								href='/'
								className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl ${
									pathname === '/' ? 'bg-muted' : ''
								} px-3 py-2 text-foreground hover:text-foreground`}
							>
								<Home className='h-5 w-5' />
								Home
							</Link>
							<Link
								href='/favorites'
								className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl ${
									pathname === '/favorites' ? 'bg-muted' : ''
								} px-3 py-2 text-foreground hover:text-foreground`}
							>
								<Heart className='h-5 w-5' />
								Favorites
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}
