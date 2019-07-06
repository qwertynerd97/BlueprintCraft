import React from 'react'
import './canvas.css'

import blocks from '../minecraft/blocks'

class Canvas extends React.Component {
	constructor() {
		super()
		this.state = {
			isPointerDown: false,
			scale: 1
		}

		this.canvas = React.createRef();
	}

	onDragStart(event) {
		const data = event.target.dataset

		// Move has to be specially handled for mobile devices
		if(event.targetTouches) {
			const touch = event.targetTouches[0]
			const canvas = this.canvas.current

			const rowSize = canvas.clientHeight / 16
			const colSize = canvas.clientWidth / 16

			const row = Math.floor(touch.clientY / rowSize)
			const col = Math.floor(touch.clientX / colSize)

			this.setState({ isPointerDown: true })
			if (row > 15 || col > 15) return
			return this.props.onClick(row, col)
		}

		this.props.onClick(data.row, data.col)
		this.setState({ isPointerDown: true })
	}

	onDragMove(event) {
		if(!this.state.isPointerDown || !event.target) return

		// Move has to be specially handled for mobile devices
		if(event.targetTouches) {
			const touch = event.targetTouches[0]
			const canvas = this.canvas.current

			const rowSize = canvas.clientHeight / 16
			const colSize = canvas.clientWidth / 16

			const row = Math.floor(touch.clientY / rowSize)
			const col = Math.floor(touch.clientX / colSize)

			if (row > 15 || col > 15) return
			return this.props.onClick(row, col)
		}

		const data = event.target.dataset
		return this.props.onClick(data.row, data.col)
	}

	onDragEnd(event) {
		this.setState({ isPointerDown: false })
	}

	render() {
		return (
			<div className="canvas-holder">
				<div className="canvas"
					onPointerDown={this.onDragStart.bind(this)} 
					onTouchStart={this.onDragStart.bind(this)}
					onPointerMove={this.onDragMove.bind(this)}
					onTouchMove={this.onDragMove.bind(this)}
					onPointerUp={this.onDragEnd.bind(this)}
					onTouchEnd={this.onDragEnd.bind(this)} 
					ref={this.canvas} >
					{this.props.pattern.map((row, rIndex) => (
						<div key={rIndex} className="row">
							{row.map((cell, index) => {
								const blockId = this.props.pattern[rIndex][index]
								const block = blocks[blockId]

								return(
									<div
										key={index} 
										className="block-cell"
										data-row={rIndex}
										data-col={index} >
										<img 
											src={block.img} 
											className="cell-image" 
											alt={block.key}
											data-row={rIndex}
											data-col={index}
											draggable={false} />
									</div>
								)
							})}
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Canvas
