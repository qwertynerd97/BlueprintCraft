import React from 'react'
// Uncomment when PR 32 is merged into master
// import { MapInteractionCSS } from 'react-map-interaction';
import MapInteractionCSS from '../map-interaction/MapInteractionCSS'
import './canvas.css'

import blocks from '../minecraft/blocks'

class Canvas extends React.Component {
	constructor() {
		super()
		this.state = {
			isPointerDown: false,
			scale: 1,
			translation: { x:0, y:0 }
		}

		this.canvas = React.createRef();
	}

	onDragStart(event) {
		if(this.props.mode === "move") return

		const data = event.target.dataset

		// Move has to be specially handled for mobile devices
		if(event.targetTouches) {
			const touch = event.targetTouches[0]

			const currTarget = document.elementFromPoint(
				touch.pageX,
				touch.pageY
			)

			const data = currTarget.dataset
			return this.props.onClick(data.row, data.col)
		}

		this.props.onClick(data.row, data.col)
		this.setState({ isPointerDown: true })
	}

	onDragMove(event) {
		if(!this.state.isPointerDown || !event.target || this.props.mode === "move") return

		// Move has to be specially handled for mobile devices
		if(event.targetTouches) {
			const touch = event.targetTouches[0]

			const currTarget = document.elementFromPoint(
				touch.pageX,
				touch.pageY
			)

			const data = currTarget.dataset
			return this.props.onClick(data.row, data.col)
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
				<MapInteractionCSS
					disablePan={this.props.mode === "draw"}
					containerAsEventTarget>
					<div className="scroll-container">
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
				</MapInteractionCSS>
			</div>
		)
	}
}

export default Canvas
