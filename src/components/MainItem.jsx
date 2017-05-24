import React from 'react';

import Item from './Item';
import Form from './Form';



class MainItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: this.props.data
		};
		this.handleDelete       = this.handleDelete.bind(this);
		this.handleAdd          = this.handleAdd.bind(this);
		this.handleEdit         = this.handleEdit.bind(this);
	}

	componentWillMount() {
	}
	componentDidMount() {
	}
	nexId(){
		this._nextId = this._nextId || this.props.length+1;
		return this._nextId++;
	}

	handleDelete(id) {
		let items = this.state.items.filter(item => item.id !== id);

		this.setState({items});
	}
	handleAdd(name){
		let item = {
			id: this.nexId(),
			name
		};
		let items = [...this.state.items, item];
		this.setState({items});
	}
	handleEdit(id, name) {
		let items = this.state.items.map(item => {
			if(item.id == id) {
				item.name = name;
			}
			return item;
		});
		this.setState({items});
	}
	render() {
		return (
			<main>
				<section className="list">
					{this.state.items.map(item =>
							<Item
								key={item.id}
								id={item.id}
								name={item.name}
								onDelete={this.handleDelete}
								onEdit={this.handleEdit}
								className="list__item"
							/>)
							}
				</section>
				<Form onAdd={this.handleAdd} />
			</main>
		);
	}
}

MainItem.propTypes = {
	data: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.number.isRequired,
		name: React.PropTypes.string.isRequired
	})).isRequired,
	length: React.PropTypes.number.isRequired
}


export default MainItem;
