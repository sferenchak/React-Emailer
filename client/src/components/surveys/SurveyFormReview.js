// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = formFields.map(({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button
				className='yellow darken-3 btn-flat white-text'
				onClick={onCancel}
			>
				<i className='material-icons left'>navigate_before</i>Back
			</button>
			<button
				onClick={() => submitSurvey(formValues, history)}
				className='teal btn-flat right white-text'
			>
				Send Survey <i className='material-icons right'>send</i>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(
	mapStateToProps,
	actions
)(withRouter(SurveyFormReview));
