import reducerRegistry from '@onaio/redux-reducer-registry';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import OrganizationSelect from '..';
import store from '../../../../store';
import assignmentReducer, {
  reducerName as assignmentReducerName,
} from '../../../../store/ducks/opensrp/assignments';
import organizationsReducer, {
  fetchOrganizations,
  reducerName as organizationsReducerName,
} from '../../../../store/ducks/opensrp/organizations';
import { organizations } from '../../../../store/ducks/tests/fixtures';

jest.mock('../../../../configs/env');

reducerRegistry.register(assignmentReducerName, assignmentReducer);
reducerRegistry.register(organizationsReducerName, organizationsReducer);

describe('/containers/forms/OrganizationSelect', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    shallow(<OrganizationSelect />);

    mount(
      <Provider store={store}>
        <OrganizationSelect jurisdictionId="" name="" planId="" />
      </Provider>
    );
  });

  it('renders select options correctly', () => {
    store.dispatch(fetchOrganizations(organizations));

    const props = {
      jurisdictionId: 'outpost-number-one',
      name: 'plan-assignment-form-outpost-number-one',
      planId: 'alpha',
    };

    const wrapper = mount(
      <Provider store={store}>
        <OrganizationSelect {...props} />
      </Provider>
    );

    expect(wrapper.children().props()).toMatchSnapshot('Organization Select ownProps');
    expect(
      wrapper
        .children()
        .children()
        .props()
    ).toMatchSnapshot('Organization Select Props');
    expect(wrapper.find('.reveal__indicator').length).toBe(2);
  });
});
