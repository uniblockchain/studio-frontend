import React from 'react';
import { mount } from 'enzyme';
import { AssetsFilters } from './index';

let wrapper;

const filterTypeCount = 5;

const defaultProps = {
  assetsParameters: {
    courseId: 'test-course',
    page: '0',
    pageSize: '50',
  },
  updateFilter: () => {},
};

describe('<AssetsFilters />', () => {
  describe('renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <AssetsFilters
          {...defaultProps}
        />,
      );
    });

    it('renders checkbox list', () => {
      expect(wrapper.find('ul')).toHaveLength(1);
      expect(wrapper.find('.filter-set')).toHaveLength(1);
    });
    it('renders correct number of list items', () => {
      expect(wrapper.find('li')).toHaveLength(filterTypeCount);
    });
    it('renders correct number of checkboxes', () => {
      const listItems = wrapper.find('li');

      listItems.forEach((item) => {
        expect(item.find('input')).toHaveLength(1);
      });
    });
    it('renders correct information for checkbox', () => {
      const listItems = wrapper.find('li');

      listItems.forEach((item) => {
        const inputItem = item.find('input');

        expect(inputItem.find('[type="checkbox"]')).toHaveLength(1);
        // expect(inputItem.find('...'))
      });
    });
  });
  describe('onChange', () => {
    it('is called correctly on select', () => {
      const updateFilterSpy = jest.fn();

      wrapper = mount(
        <AssetsFilters
          {...defaultProps}
          updateFilter={updateFilterSpy}
        />,
      );

      // const checkBox = wrapper.find('li input [type="checkbox"] [name="OTHER"]');
      // expect(checkBox).toHaveLength(1);

      const x = wrapper.find('li input');

      x.forEach(y => console.log(y.html()));

      // const checkBox = wrapper.find('li input').filterWhere(input => input.matchesElement('<input [type="checkbox"] [name="OTHER"]'));
      const checkBox = wrapper.find('li input').filterWhere(input => input.find('[type="checkbox"] [name="OTHER"]').exists());
      expect(checkBox).toHaveLength(1);

      console.log(checkBox.at(0).html());

      // console.log(checkBox.at(0).prop('onChange'));

      checkBox.at(0).simulate('click');
      checkBox.at(0).simulate('change', { target: { 'checked': true } });
      // checkBox.at(0).simulate('change', {target: {checked: true}});

      console.log(checkBox.at(0).html());
      expect(updateFilterSpy).toHaveBeenCalledTimes(1);
      expect(updateFilterSpy).toHaveBeenLastCalledWith(
        'OTHER',
        true,
      );
    });
  });
});
