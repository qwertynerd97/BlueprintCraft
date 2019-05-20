import React from 'react'
import './canvas.css'

import blocks from '../minecraft/blocks'

class Canvas extends React.Component {
	render() {
		return (
			<table className="canvas">
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
									onClick={() => this.props.onClick(rIndex, index)}>
									<img src={block.img} className="block-image" alt={block.key}/>
								</td>
							)
						})}
					</tr>
				))}
				</tbody>
			</table>
		)
	}
}

export default Canvas
