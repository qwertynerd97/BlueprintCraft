import React from 'react'
import './App.css'

import Toolbar from './components/toolbar'
import Canvas from './components/canvas'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			currentItem: 0,
			pattern: [
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
				[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
			]
		}
	}

	setCurrentItem(item) {
		this.setState({ currentItem: item })
	}

	setBlock(x, y) {
		const pattern = this.state.pattern
		pattern[x][y] = this.state.currentItem

		this.setState({ pattern })
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
					onClick={this.setCurrentItem.bind(this)} />
			</div>
		)
	}
}

export default App
