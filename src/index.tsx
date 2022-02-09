import "./index.css"

import { WalletProvider, getChainOptions } from "@terra-money/wallet-provider"

import { BrowserRouter } from "react-router-dom"
import { Main } from "./Main"
import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"

getChainOptions().then((chainOptions) => {
	ReactDOM.render(
		<BrowserRouter>
			<WalletProvider {...chainOptions}>
				<Main />
			</WalletProvider>
		</BrowserRouter>,
		document.getElementById("root")
	)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
