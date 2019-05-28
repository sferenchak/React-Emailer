// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
	{ label: 'Survey Title', name: 'title' },
	{ label: 'Subject Line', name: 'subject' },
	{ label: 'Email Body', name: 'body' },
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

export default reduxForm({
	form: 'surveyForm'
})(SurveyForm);
