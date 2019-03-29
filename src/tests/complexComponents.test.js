import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Firebase from '../components/Firebase/Firebase.js'
import PageEvent from '../components/PageEvent/PageEvent.js'
import PageMember from '../components/PageMember/PageMember.js'
import PageService from '../components/PageService/PageService.js'

it('shallow renders PageEvent without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageEvent));
});

it('shallow renders PageMember without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageMember));
});

it('shallow renders PageService without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageService));
});