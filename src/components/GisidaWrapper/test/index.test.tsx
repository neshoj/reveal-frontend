import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router';
import * as fixtures from '../../../store/ducks/tests/fixtures';
import GisidaWrapper from '../index';

/** The test requires mapbox-gl-js mock to test Gisida's Map child component. Check https://github.com/mapbox/mapbox-gl-js/issues/5026  for more info */
// Work in Progress
const history = createBrowserHistory();
describe('renders GisidaWrapper correctly', () => {
  it('renders component without crashing', () => {
    const props = {
      geoData: fixtures.jurisdictions[0],
      goal: fixtures.goals,
    };
    shallow(
      <Router history={history}>
        <GisidaWrapper {...props} />
      </Router>
    );
  });
  it('Renders map component without tasks', () => {
    const props = {
      geoData: fixtures.jurisdictions[0],
      goal: fixtures.goals,
    };
    const wrapper = shallow(<GisidaWrapper {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    jest.useFakeTimers();
    wrapper.setProps({ ...props });

    jest.runOnlyPendingTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Renders map component with tasks', () => {
    const props1 = {
      currentGoal: null,
      geoData: fixtures.jurisdictions[0],
      goal: fixtures.goals,
      tasks: [fixtures.tasks[0]],
    };
    const props = {
      currentGoal: fixtures.task1.goal_id,
      geoData: fixtures.jurisdictions[0],
      goal: fixtures.goals,
      tasks: [fixtures.tasks[0]],
    };
    const wrapper = shallow(<GisidaWrapper {...props1} />);
    /** Investigate why it won't set state inside initmap even though it goes into init map this leads to setting dorenderMap to state manually */
    wrapper.setState({ doRenderMap: true });
    wrapper.setProps({ ...props });
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Renders Loading', () => {
    const wrapper = shallow(<GisidaWrapper />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
