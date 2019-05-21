import React from 'react'
import './toolbar.css'

import blocks from '../minecraft/blocks'

class Toolbar extends React.Component {
	render() {
		const currentBlock = blocks[this.props.currBlock]
		return (
			<div className="toolbar">
				<div>
					<img 
						src={currentBlock.block ? currentBlock.block : currentBlock.img} 
						className="curr-block-display"
						alt={currentBlock.key}/>
				</div>
				<div className="block-bar">
					{blocks.map((block, index) => (
						<button 
							key={block.key} 
							className="block-button"
							onClick={() => this.props.onClick(index)}
							data-block={block.key}>
							<img 
								src={block.block ? block.block : block.img} 
								className="block-image" 
								alt={block.key}/>
						</button>
					))}
				</div>
			</div>		
		)
	}
}

export default Toolbar
