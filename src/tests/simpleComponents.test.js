import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '../components/App/App.js'
import Navigation from '../components/Navigation/Navigation.js'
import PageAccount from '../components/PageAccount/PageAccount.js'
import PageAdmin from '../components/PageAdmin/PageAdmin.js'
import PageHome from '../components/PageHome/PageHome.js'
import PageLanding from '../components/PageLanding/PageLanding.js'
import PagePasswordForget from '../components/PagePasswordForget/PagePasswordForget.js'
import PageSignIn from '../components/PageSignIn/PageSignIn.js'
import PageSignUp from '../components/PageSignUp/PageSignUp.js'
import PasswordChange from '../components/PasswordChange/PasswordChange.js'
import SignOut from '../components/SignOut/SignOut.js'

it('shallow renders App without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(App));
});

it('shallow renders Navigation without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(Navigation));
});

it('shallow renders PageAccount without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageAccount));
});

it('shallow renders PageAdmin without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageAdmin));
});

it('shallow renders PageHome without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageHome));
});

it('shallow renders PageLanding without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(PageLanding));
});

it('shallow renders PagePasswordForget without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PagePasswordForget));
});

it('shallow renders PageSignIn without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageSignIn));
});

it('shallow renders PageSignUp without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PageSignUp));
});

it('shallow renders PasswordChange without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(PasswordChange));
});

it('shallow renders SignOut without exploding', () => {
	const renderer = new ShallowRenderer();
	renderer.render(React.createElement(SignOut));
});