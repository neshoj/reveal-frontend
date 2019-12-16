import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import flushPromises from 'flush-promises';
import { createBrowserHistory } from 'history';
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import ConnectedPractitionersListView, { PractitionersListView } from '..';
import {
  OPENSRP_PRACTITIONER_ENDPOINT,
  PRACTITIONERS,
  PRACTITIONERS_LIST_URL,
} from '../../../../../constants';
import store from '../../../../../store';
import * as practitionerDucks from '../../../../../store/ducks/opensrp/practitioners';
import * as fixtures from '../../../../../store/ducks/tests/fixtures';
import { state } from './fixtures';

// tslint:disable-next-line: no-var-requires
const fetch = require('jest-fetch-mock');

const history = createBrowserHistory();

const signal = new AbortController().signal;

describe('src/containers/TeamAssignment/PractitionersListView/', () => {
  beforeEach(() => {
    store.dispatch(practitionerDucks.removePractitionersAction);
    jest.resetAllMocks();
  });

  it('renders a dumb TeamListView correctly', () => {
    fetch.once(JSON.stringify(fixtures.practitioners));
    const mock: any = jest.fn();
    const props = {
      history,
      location: mock,
      match: {
        isExact: true,
        params: { id: '' },
        path: PRACTITIONERS_LIST_URL,
        url: PRACTITIONERS_LIST_URL,
      },
      practitioners: fixtures.practitioners,
    };
    const wrapper = mount(
      <Router history={history}>
        <PractitionersListView {...props} />
      </Router>
    );
    // page title
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual(`${PRACTITIONERS}(${fixtures.practitioners.length})`);

    // should display a breadcrumb
    expect(toJson(wrapper.find('Breadcrumb'))).toMatchSnapshot('Breadcrumb');

    // should have link to add practitioner
    expect(wrapper.find(`LinkAsButton`).length).toEqual(1);

    // should have form to search practitioners
    expect(wrapper.find('input#search').length).toEqual(1);

    // should have a table
    expect(toJson(wrapper.find('tbody tr').first())).toMatchSnapshot(
      'First table record in listview'
    );
    wrapper.unmount();
  });

  it('Makes the expected calls to the opensrpService', async () => {
    const mockList = jest.fn(async () => fixtures.practitioners);
    const classMock = jest.fn().mockImplementation(() => {
      return {
        list: mockList,
      };
    });
    const fetchedMock = jest.fn(arg => practitionerDucks.fetchPractitioners(arg));
    const mock: any = jest.fn();
    const props = {
      fetchPractitionersCreator: fetchedMock,
      history,
      location: mock,
      match: {
        isExact: true,
        params: { id: '' },
        path: PRACTITIONERS_LIST_URL,
        url: PRACTITIONERS_LIST_URL,
      },
      practitioners: fixtures.practitioners,
      serviceClass: classMock,
    };
    mount(
      <Router history={history}>
        <PractitionersListView {...props} />
      </Router>
    );

    await flushPromises();
    expect(classMock).toBeCalledWith(OPENSRP_PRACTITIONER_ENDPOINT, signal);
    expect(mockList).toHaveBeenCalled();
    expect(fetchedMock).toHaveBeenCalledWith(fixtures.practitioners, true);
  });

  it('PractitionerListView works correctly when connected to store', () => {
    fetch.once(JSON.stringify([]));
    const mock: any = jest.fn();
    store.dispatch(practitionerDucks.fetchPractitioners(fixtures.practitioners));
    const props = {
      history,
      location: mock,
      match: {
        isExact: true,
        params: {},
        path: PRACTITIONERS_LIST_URL,
        url: PRACTITIONERS_LIST_URL,
      },
    };
    const wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <ConnectedPractitionersListView {...props} />
        </Router>
      </Provider>
    );

    // check that store data is part of passed props
    const foundProps = wrapper.find('PractitionersListView').props() as any;
    expect(foundProps.practitioners).toEqual(fixtures.practitioners);
    wrapper.unmount();
  });

  it('calls selectors with the right arguments', () => {
    // spy on selectors
    const practitionersArrayMock = jest.spyOn(practitionerDucks, 'getPractitionersArray');

    fetch.once(JSON.stringify([]));
    const mock: any = jest.fn();
    store.dispatch(practitionerDucks.fetchPractitioners(fixtures.practitioners));
    const props = {
      history,
      location: mock,
      match: {
        isExact: true,
        params: {},
        path: PRACTITIONERS_LIST_URL,
        url: PRACTITIONERS_LIST_URL,
      },
    };
    const wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <ConnectedPractitionersListView {...props} />
        </Router>
      </Provider>
    );

    expect(practitionersArrayMock).toHaveBeenCalled();
    expect(practitionersArrayMock.mock.calls[0]).toEqual([state]);
  });
});
