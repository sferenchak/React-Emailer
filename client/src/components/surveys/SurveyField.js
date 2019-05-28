// SurveyField contains logic to render a single
// label and text input
import React from 'react';

const SurveyField = ({ input }) => {
	return (
		<div>
			<input {...input} />
		</div>
	);
};

export default SurveyField;
