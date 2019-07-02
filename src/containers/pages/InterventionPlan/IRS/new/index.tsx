// this is the IRS NEW view page component
import * as React from 'react';

import { HOME, HOME_URL, INTERVENTION_IRS_URL } from '../../../../../constants';

import HeaderBreadcrumbs, {
  BreadCrumbProps,
} from '../../../../../components/page/HeaderBreadcrumb/HeaderBreadcrumb';

class IrsNewPlan extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    const homePage = {
      label: HOME,
      url: HOME_URL,
    };
    const basePage = {
      label: 'IRS',
      url: INTERVENTION_IRS_URL,
    };
    const breadCrumbProps: BreadCrumbProps = {
      currentPage: {
        label: 'New Plan',
        url: `${INTERVENTION_IRS_URL}/new`,
      },
      pages: [homePage, basePage],
    };

    return (
      <div className="mb-5">
        <HeaderBreadcrumbs {...breadCrumbProps} />
        <h2 className="page-title">IRS: New Plan</h2>
      </div>
    );
  }
}

export default IrsNewPlan;
