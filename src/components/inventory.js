import React from 'react'
import './inventory.css'

import bedrock from '../minecraft/bedrock_inventory'
import blocks from '../minecraft/blocks'

class Inventory extends React.Component {
	constructor() {
		super()
		this.state = {
			currentTab: "Wiki Template"
		}
	}

	changeTab(newTab) {
		this.setState({ currentTab: newTab })
	}

	render() {
		console.log(this.props)
		return (
			<div className="inventory">
				<div className="tab-list">
					{bedrock.tabs.map(tab => (
						<button 
							className={"tab-button " + (this.state.currentTab === tab.name ? "current" : "")}
							key={tab.name} 
							onClick={this.changeTab.bind(this, tab.name)}>
							{tab.name}
						</button>
					))}
					<button
						className="close-button"
						onClick={this.props.closeModal}>
						✖
					</button>
				</div>
				{bedrock.tabs.map(tab => (
					<div key={tab.name}
						className={"tab " + (this.state.currentTab === tab.name ? "show" : "hide")}>
						{tab.blocks.map(blockName => {
							const block = blocks[blockName]
							const isActive = this.props.blockList.includes(blockName) ? "active" : "inactive"
							return (
							<img
								className={"inventory-block " + isActive}
								key={blockName}
								src={block.img}
								alt={block.key}
								onClick={() => this.props.toggleBlock(blockName)}/>
						)})}
					</div>
				))}
			</div>
		)
	}
}

export default Inventory