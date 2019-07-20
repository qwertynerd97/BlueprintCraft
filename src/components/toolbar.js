import React from 'react'
import mergeImages from 'merge-images';
import './toolbar.scss'

import blocks from '../minecraft/blocks'

const downloadIcon = require('../assets/download-solid.svg')
const moveIcon = require('../assets/arrows-alt-solid.svg')
const drawIcon = require('../assets/pencil-alt-solid.svg')

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

	download() {
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

	selectBlock(blockName) {
		this.props.setMode("draw")
		this.props.onClick(blockName)
	}

	render() {
		const currentBlock = blocks[this.props.currBlock]
		const chest = blocks["chest"]
		return (
			<div className="toolbar">
				<div className="info-bar">
					<img
						src={downloadIcon}
						className="option-button"
						alt="Download Blueprint" 
						onClick={this.download.bind(this)}/>
					<img 
						src={chest.img} 
						className="option-button"
						alt={"Open Inventory"}
						onClick={this.props.openModal} />
					<img
						src={currentBlock.block ? currentBlock.block : currentBlock.img} 
						className="curr-block-display"
						alt={currentBlock.key}/>
					<img
						src={drawIcon}
						className={"option-button " + (this.props.mode === "draw" ? "" : "disabled")}
						alt="Draw" 
						onClick={() => this.props.setMode("draw")}/>
					<img
						src={moveIcon}
						className={"option-button " + (this.props.mode === "move" ? "" : "disabled")}
						alt="Move" 
						onClick={() => this.props.setMode("move")}/>
				</div>
				<div className="block-bar">
					{this.props.blockList.map(blockName => {
						const block = blocks[blockName]
						return (
							<button 
								key={block.key} 
								className="block-button"
								onClick={this.selectBlock.bind(this, blockName)}
								data-block={block.key}>
								<img 
									src={block.block ? block.block : block.img} 
									className="block-image" 
									alt={block.key}/>
							</button>
					)})}
				</div>
			</div>		
		)
	}
}

export default Toolbar
