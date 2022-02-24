import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { useConnectedWallet, useWallet } from "@terra-money/wallet-provider"

export function Wallet() {
	const { availableConnections, connect, disconnect } = useWallet()
	const connectedWallet = useConnectedWallet()
	const [open, setOpen] = useState<boolean>(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const getButtonText = () => {
		return connectedWallet
			? `${connectedWallet.walletAddress.substring(
					0,
					6
			  )}...${connectedWallet.walletAddress.substring(
					connectedWallet.walletAddress.length - 7,
					connectedWallet.walletAddress.length - 1
			  )}`
			: "Connect Wallet"
	}

	return (
		<>
			<button
				type='button'
				onClick={handleClickOpen}
				className='inline-flex items-center px-3 py-2 border border-indigo-900 text-sm leading-4 font-medium rounded-md shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 
        hover:from-purple-800 hover:to-indigo-900 focus:ring-indigo-500 bg-gradient-to-b from-purple-700 to-indigo-800'
			>
				{getButtonText()}
			</button>
			<Transition.Root show={open} as={Fragment}>
				<Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpen}>
					<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
								{connectedWallet ? (
									<>
										<div>
											<div className='mt-3 text-center sm:mt-5'>
												<Dialog.Title
													as='h3'
													className='text-lg leading-6 font-medium text-gray-900'
												>
													Disconnect?
												</Dialog.Title>
												<div className='mt-2'>
													<p className='text-sm text-gray-500'>
														Disconnect your wallet to disable any interaction with network.
													</p>
												</div>
											</div>
										</div>
										<div className='mt-5 sm:mt-6'>
											<button
												type='button'
												className='inline-flex justify-center w-full rounded-md border mb-4 border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
												onClick={() => {
													handleClose()
													disconnect()
												}}
											>
												Disconnect
											</button>
											<button
												type='button'
												className='inline-flex items-center justify-center w-full px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
												onClick={() => setOpen(false)}
											>
												Cancel
											</button>
										</div>
									</>
								) : (
									<>
										<div>
											<div className='mt-3 text-center sm:mt-5'>
												<Dialog.Title
													as='h3'
													className='text-lg leading-6 font-medium text-gray-900'
												>
													Connect Wallet
												</Dialog.Title>
												<div className='mt-2'>
													<p className='text-sm text-gray-500'>
														Connect your wallet to the site to allow for interaction with network.
													</p>
												</div>
											</div>
										</div>
										<div className='mt-5 sm:mt-6'>
											{availableConnections.map(({ type, name, icon, identifier = "" }) => (
												<button
													key={name}
													type='button'
													className='inline-flex justify-center w-full rounded-md border mb-4 border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
													onClick={() => {
														handleClose()
														connect(type, identifier)
													}}
												>
													<img src={icon} alt={name} className='h-5 w-5 mr-2' />
													{name}
												</button>
											))}

											<button
												type='button'
												className='inline-flex items-center justify-center w-full px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
												onClick={() => setOpen(false)}
											>
												Cancel
											</button>
										</div>
									</>
								)}
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	)
}
