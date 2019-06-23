import React from 'react'
import mergeImages from 'merge-images';
import './toolbar.css'

import blocks from '../minecraft/blocks'

const downloadIcon = require('../assets/download-solid.svg')

class Toolbar extends React.Component {
	downloadFile(filename, b64) {
		console.log(b64)
		var element = document.createElement('a')
		element.setAttribute('href', b64)
		element.setAttribute('download', filename)

		element.style.display = 'none'
		document.body.appendChild(element)

		element.click()

		document.body.removeChild(element)
	}

	onClick() {
		const mergerObject = this.props.pattern.map((row, rIndex) => {
			return row.map((blockId, cIndex) => ({ 
				x: cIndex * 16, 
				y: rIndex * 16,
				src: blocks[blockId].img
			}))
		})

		console.log(mergerObject)
		console.log(mergerObject.flat())
		mergeImages(mergerObject.flat(), { width: 256, height: 256 })
			.then(b64 => this.downloadFile('blueprint.png', b64))
	}

	render() {
		const currentBlock = blocks[this.props.currBlock]
		return (
			<div className="toolbar">
				<div className="info-bar">
					<img 
						src={currentBlock.block ? currentBlock.block : currentBlock.img} 
						className="curr-block-display"
						alt={currentBlock.key}/>
					<img
						src={currentBlock.block ? currentBlock.block : currentBlock.img} 
						className="curr-block-display"
						alt={currentBlock.key}/>
					<img
						src={downloadIcon}
						className="download-button"
						alt="Download Blueprint" 
						onClick={this.onClick.bind(this)}/>
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
