// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
	{
		label: 'Survey Title',
		name: 'title',
		noValueError: 'You must provide a title'
	},
	{
		label: 'Subject Line',
		name: 'subject',
		noValueError: 'You must provide a subject'
	},
	{
		label: 'Email Body',
		name: 'body',
		noValueError: 'You must provide an email body'
	},
	{ label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
	renderFields() {
		return FIELDS.map(({ label, name }) => {
			return (
				<Field
					key={name}
					component={SurveyField}
					type='text'
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(values => {
						console.log(values);
					})}
				>
					{this.renderFields()}
					<Link to='/surveys' className='red btn-flat white-text'>
						Cancel<i className='material-icons right'>cancel</i>
					</Link>
					<button className='teal btn-flat right white-text' type='submit'>
						Next
						<i className='material-icons right'>navigate_next</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	FIELDS.forEach(({ name, noValueError }) => {
		if (!values[name]) {
			errors[name] = noValueError;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm'
})(SurveyForm);
