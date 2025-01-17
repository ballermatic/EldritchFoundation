import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import Heading from '@/components/heading';
import Mark from '@/components/logo/logo-mark';

export default function HomePage() {
	return (
		<main className='container mx-auto flex flex-col items-center p-12 '>
			<div className='flex max-w-xl flex-col items-center text-center'>
				<Mark className='size-64 ~my-12/24' />
				<Heading
					level='h1'
					preset='exa'
					className='mb-3'>
					Prima Materia
				</Heading>
				<Heading
					level='h2'
					preset='kilo'
					className='mb-6 text-gray-500'>
					Yet another NextJS starter
				</Heading>
				<div className='lede'>
					<p>
						The primitive formless base of matter similar to chaos, the quintessence or aether. In
						alchemy and philosophy, prima materia, materia prima or “first matter,” is the{' '}
						<span className='font-serif italic'> ubiquitous starting material</span> required for
						the alchemical magnum opus and the creation of the philosopher’s stone.
					</p>
					<Link
						href='https://en.wikipedia.org/wiki/Prima_materia'
						target='_blank'
						className='inline-flex items-center justify-center gap-1 text-xs hover:text-blue-500'>
						Wikipedia <ExternalLink size={11} />
					</Link>
				</div>
			</div>

			<div className='my-12 grid w-full grid-flow-row gap-6 md:grid-cols-3'>
				<Link
					href='/colors'
					className='group grow rounded-sm border border-smoke bg-gradient-to-br from-transparent via-transparent to-blue-50 p-6 px-5 hover:border-blue-500 hover:to-blue-100'>
					<Heading
						level='h2'
						preset='kilo'
						className='mb-3 group-hover:text-blue-500'>
						Colors{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							<ArrowRight size={18} />
						</span>
					</Heading>
					<p className='m-0 max-w-[30ch] group-hover:text-blue-500'>
						Default colors enhanced via tints.dev.
					</p>
				</Link>

				<Link
					href='/typography'
					className='group grow rounded-sm border border-smoke bg-gradient-to-br from-transparent via-transparent to-blue-50 p-6 px-5 hover:border-blue-500 hover:to-blue-100'>
					<Heading
						level='h2'
						preset='kilo'
						className='mb-3 group-hover:text-blue-500'>
						Typography{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							<ArrowRight size={18} />
						</span>
					</Heading>
					<p className='m-0 max-w-[30ch] group-hover:text-blue-500'>
						Font-specific components and classes
					</p>
				</Link>

				<Link
					href='/sandbox'
					className='group grow rounded-sm border border-smoke bg-gradient-to-br from-transparent via-transparent to-blue-50 p-6 px-5 hover:border-blue-500 hover:to-blue-100'>
					<Heading
						level='h2'
						preset='kilo'
						className='mb-3 group-hover:text-blue-500'>
						Sandbox{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							<ArrowRight size={18} />
						</span>
					</Heading>
					<p className='m-0 max-w-[30ch] group-hover:text-blue-500'>Play around. No sand.</p>
				</Link>
			</div>

			<div className='my-12 w-full text-left'>
				<Heading
					level='h2'
					preset='kilo'
					className='mb-3 text-lg font-medium'>
					Specification
				</Heading>
				<div className='flex flex-col bg-smoke px-7 py-6 font-mono text-sm text-white ~gap-4/8 md:flex-row'>
					<div className='md:w-1/2'>
						<p className='font-semibold uppercase'>Basics</p>
						<div className='mb-1'>------</div>
						<ul className='*:mb-2'>
							<li>Next.js 14 app router</li>
							<li>
								Tailwind 3.4: <span className='italic'>(4.x soon)</span>
							</li>
							<li>React Hook Form + Zod</li>
							<li>Bundle Analyzer</li>
							<li>Next Sitemap</li>
							<li>ESLint + Prettier</li>
							<li>Tailwind Fluid</li>
						</ul>
					</div>
					<div className='mb-3 md:hidden'>========================</div>
					<div className='md:w-1/2'>
						<p className='font-semibold uppercase'>Extras</p>
						<div className='mb-1'>------</div>
						<ul className='*:mb-2'>
							<li>Opinionated/tuned typography</li>
							<li>
								Variable{' '}
								<Link
									href='https://github.com/mona-sans'
									target='_blank'
									className='text-acid-500 underline hover:text-acid-300'>
									sans
								</Link>
								,{' '}
								<Link
									href='https://fonts.google.com/specimen/Bitter'
									target='_blank'
									className='text-acid-500 underline hover:text-acid-300'>
									sans serif
								</Link>
								, and{' '}
								<Link
									href='https://monaspace.githubnext.com/'
									target='_blank'
									className='text-acid-500 underline hover:text-acid-300'>
									mono
								</Link>{' '}
								fonts
							</li>
							<li>Support for variable font settings</li>
							<li>More colors via tints.dev (OKLCH)</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
//
