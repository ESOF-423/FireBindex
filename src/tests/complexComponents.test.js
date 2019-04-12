import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import PageEvent from '../components/PageEvent/PageEvent.js'
import CreateEvent from '../components/PageEvent/CreateEvent.js'
import ViewEvent from '../components/PageEvent/ViewEvent.js'

import PageMember from '../components/PageMember/PageMember.js'
import CreateMember from '../components/PageMember/CreateMember.js'
import ViewMember from '../components/PageMember/ViewMember.js'

import PageService from '../components/PageService/PageService.js'
import CreateService from '../components/PageService/CreateService.js'
import ViewService from '../components/PageService/ViewService.js'

import CheckInMember from '../components/PageMemberCheckIn/CheckInMember.js'
import PageMemberCheckIn from '../components/PageMemberCheckIn/PageMemberCheckIn.js'
import ViewEventForCheckin from '../components/PageMemberCheckIn/ViewEventForCheckin.js'
import ViewShortMemberList from '../components/PageMemberCheckIn/ViewShortMemberList.js'

it('shallow renders PageMemberCheckIn without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageMemberCheckIn));
});

it('shallow renders ViewEventForCheckin without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(ViewEventForCheckin));
});

it('shallow renders PageEvent without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageEvent));
});

it('shallow renders CreateEvent without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(CreateEvent));
});

it('shallow renders ViewEvent without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(ViewEvent));
});

it('shallow renders PageMember without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageMember));
});

it('shallow renders CreateMember without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(CreateMember));
});

it('shallow renders ViewMember without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(ViewMember));
});

it('shallow renders PageService without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageService));
});

it('shallow renders CreateService without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(CreateService));
});

it('shallow renders ViewService without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(ViewService));
});

it('shallow renders CheckInMember without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(CheckInMember));
});

it('shallow renders ViewShortMemberList without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(ViewShortMemberList));
});