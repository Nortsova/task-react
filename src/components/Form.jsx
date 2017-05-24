import React from 'react';
import Button from "./Button";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let title = this.state.title;
		if(title) {
			this.props.onAdd(title);
			this.setState({title: ''});
		}
	}
	handleChange(event) {
		let title = event.target.value;

		this.setState({title});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="flex flex-justify main-form">
				<input className="form-input" type="text" value={this.state.title} placeholder="Что добавить?" onChange={this.handleChange} />

				<Button type="submit">Добавить</Button>
			</form>
		);
	}

}

Form.propTypes = {
	onAdd: React.PropTypes.func.isRequired
}

export default Form;
