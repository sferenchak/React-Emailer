// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues }) => {
	return (
		<div>
			<h5>Please confirm your entries</h5>

			<button className='yellow darken-3 btn-flat' onClick={onCancel}>
				<i className='material-icons left'>navigate_before</i>Back
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
