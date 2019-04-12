import {getAge, convertMeals} from '../components/PageMember/ViewMember.js';

it('converted a meal properly', () => {
	expect(convertMeals(0)).toBe("In-Center Meals");
});

it('converted a meal properly', () => {
	expect(convertMeals(1)).toBe("Meals on Wheels");
});

it('converted a meal properly', () => {
	expect(convertMeals(2)).toBe("No Meals");
});

it('got an age properly', () => {
	expect(getAge("2011-10-10T14:48:00")).toBe(7);
});