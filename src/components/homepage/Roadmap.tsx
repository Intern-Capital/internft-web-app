/* This example requires Tailwind CSS v2.0+ */
import {
	AnnotationIcon,
	GlobeAltIcon,
	LightningBoltIcon,
	MailIcon,
	ScaleIcon,
} from "@heroicons/react/outline"

const transferFeatures = [
	{
		id: 1,
		name: "Competitive exchange rates",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: GlobeAltIcon,
	},
	{
		id: 2,
		name: "No hidden fees",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: ScaleIcon,
	},
	{
		id: 3,
		name: "Transfers are instant",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: LightningBoltIcon,
	},
]
const communicationFeatures = [
	{
		id: 1,
		name: "Mobile notifications",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: AnnotationIcon,
	},
	{
		id: 2,
		name: "Reminder emails",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: MailIcon,
	},
	{
		id: 2,
		name: "Reminder emails",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: MailIcon,
	},
	{
		id: 2,
		name: "Reminder emails",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: MailIcon,
	},
	{
		id: 2,
		name: "Reminder emails",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: MailIcon,
	},
	{
		id: 2,
		name: "Reminder emails",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: MailIcon,
	},
]
export function Roadmap() {
	return (
		<div className='relative mt-12 sm:mt-16 lg:mt-24'>
			<div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center'>
				<div className='lg:col-start-2'>
					<h3 className='text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl'>
						Roadmap
					</h3>
					<p className='mt-3 text-lg text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus
						eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
					</p>

					<dl className='mt-10 space-y-10'>
						{communicationFeatures.map((item) => (
							<div key={item.id} className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
										<item.icon className='h-6 w-6' aria-hidden='true' />
									</div>
									<p className='ml-16 text-lg leading-6 font-medium text-gray-900'>{item.name}</p>
								</dt>
								<dd className='mt-2 ml-16 text-base text-gray-500'>{item.description}</dd>
							</div>
						))}
					</dl>
				</div>

				<div className='mt-10 -mx-4 relative lg:mt-0 lg:col-start-1'>
					<svg
						className='absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden'
						width={784}
						height={404}
						fill='none'
						viewBox='0 0 784 404'
						aria-hidden='true'
					>
						<defs>
							<pattern
								id='e80155a9-dfde-425a-b5ea-1f6fadd20131'
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits='userSpaceOnUse'
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className='text-gray-200'
									fill='currentColor'
								/>
							</pattern>
						</defs>
						<rect width={784} height={404} fill='url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)' />
					</svg>
					<img
						className='relative mx-auto'
						width={490}
						src='https://tailwindui.com/img/features/feature-example-2.png'
						alt=''
					/>
				</div>
			</div>
		</div>
	)
}
