import React from 'react';
import Button from './Button';

class Item extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editing: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}


	componentDidUpdate(prevProps, prevState) {
		if(this.state.editing) {
			this.refs.name.focus();
			this.refs.name.select();
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		let name = this.refs.name.value;

		this.props.onEdit(this.props.id, name);
		this.setState({editing: false});
	}

	renderDisplay() {
		return (
		<div className="flex flex-justify">
				<span>{this.props.name}</span>
				<div>
					<Button onClick={() => this.setState({editing: true})} >Edit</Button>
					<Button onClick={()=> this.props.onDelete(this.props.id)}>Delete </Button>
				</div>
		</div>
			);
	}
	renderForm() {
		return (
			<form onSubmit={this.handleSubmit} className="flex flex-justify" >
				<input type="text" ref="name" defaultValue={this.props.name} />
				<Button  type="submit" >save</Button>
			</form>
		);
	}
	render(){
		return (
			<div className={this.props.className}>
				{this.state.editing ? this.renderForm() : this.renderDisplay()}
			</div>
		);
	}
 }



Item.propTypes = {
	name: React.PropTypes.string.isRequired,
	onDelete: React.PropTypes.func.isRequired,
	onEdit: React.PropTypes.func.isRequired
}
export default Item;
