import React from 'react'
import './canvas.css'

import blocks from '../minecraft/blocks'

class Canvas extends React.Component {
	constructor() {
		super()
		this.state = {
			isPointerDown: false
		}
	}

	onPointerDown(event) {
		const data = event.target.dataset
		this.props.onClick(data.row, data.col)
		this.setState({ isPointerDown: true })
	}

	onPointerMove(event) {
		if(!this.state.isPointerDown) return

		const data = event.target.dataset
		this.props.onClick(data.row, data.col)
	}

	onPointerUp(event) {
		this.setState({ isPointerDown: false })
	}

	render() {
		return (
			<div
				className="canvas">
				<table 
					cellSpacing="0"
					onPointerDown={this.onPointerDown.bind(this)} 
					onTouchStart={this.onPointerDown.bind(this)}
					onPointerMove={this.onPointerMove.bind(this)}
					onTouchMove={this.onPointerMove.bind(this)}
					onPointerUp={this.onPointerUp.bind(this)}
					onPointerLeave={this.onPointerUp.bind(this)}
					onTouchEnd={this.onPointerUp.bind(this)} >
					<tbody>
					{this.props.pattern.map((row, rIndex) => (
						<tr key={rIndex} className="row">
							{row.map((cell, index) => {
								const blockId = this.props.pattern[rIndex][index]
								const block = blocks[blockId]

								return(
									<td
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
									</td>
								)
							})}
						</tr>
					))}
					</tbody>
				</table>

				<div className="spacer" />
			</div>
		)
	}
}

export default Canvas
