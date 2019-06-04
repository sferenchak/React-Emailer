import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

export class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			return (
				<div className='card blue-grey darken-1' key={survey._id}>
					<div className='card-content white-text'>
						<span className='card-title'>{survey.title}</span>
						<p>{survey.body}</p>
						<p className='right'>
							Send On: {new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className='card-action'>
						<span className='orange-text'>
							<strong>Yes: {survey.yes}</strong>
						</span>
						<span className='orange-text right'>
							<strong>No: {survey.no}</strong>
						</span>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(
	mapStateToProps,
	{ fetchSurveys }
)(SurveyList);
