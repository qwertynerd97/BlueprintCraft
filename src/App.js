import React from 'react'
import Modal from 'react-modal';
import './App.css'

import Toolbar from './components/toolbar'
import Canvas from './components/canvas'
import Inventory from './components/inventory'

Modal.setAppElement('#root')

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			currentItem: "air",
			pattern: [
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
				["air","air","air","air", "air","air","air","air", "air","air","air","air", "air","air","air","air"],
			],
			blockList: [
				"air",
				"wool_white",
				"wool_light_gray",
				"wool_gray",
				"wool_black",
				"wool_brown",
				"wool_red",
				"wool_orange",
				"wool_yellow",
				"wool_lime",
				"wool_green",
				"wool_cyan",
				"wool_light_blue",
				"wool_blue",
				"wool_purple",
				"wool_magenta",
				"wool_pink"
			],
			modalIsOpen: false,
		}
	}

	setCurrentItem(item) {
		this.setState({ currentItem: item })
	}

	setBlock(x, y) {
		if(x < 0 || x > 15 || y < 0 || y > 15) return
		const pattern = this.state.pattern
		pattern[x][y] = this.state.currentItem

		this.setState({ pattern })
	}

	openModal() {
		this.setState({ modalIsOpen: true })
	}

	closeModal() {
		this.setState({ modalIsOpen: false })
	}

	toggleBlock(blockName) {
		this.setState(prevState => {
			const hasBlock = prevState.blockList.indexOf(blockName)

			if(hasBlock === -1) {
				prevState.blockList.push(blockName)
			} else {
				prevState.blockList.splice(hasBlock, 1)
			}

			return { blockList: prevState.blockList }
		})
	}

	render() {
		return (
			<div className="App">
				<Canvas 
					pattern={this.state.pattern} 
					onClick={this.setBlock.bind(this)} />

				<Toolbar 
					pattern={this.state.pattern}
					currBlock={this.state.currentItem}
					blockList={this.state.blockList}
					onClick={this.setCurrentItem.bind(this)}
					openModal={this.openModal.bind(this)} />

				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal.bind(this)}
					className="modal"
					overlayClassName="overlay">
					<Inventory
						blockList={this.state.blockList}
						closeModal={this.closeModal.bind(this)}
						toggleBlock={this.toggleBlock.bind(this)} />
				</Modal>
			</div>
		)
	}
}

export default App
