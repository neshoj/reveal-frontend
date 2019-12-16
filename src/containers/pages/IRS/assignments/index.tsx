import ListView from '@onaio/list-view';
import reducerRegistry from '@onaio/redux-reducer-registry';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { Store } from 'redux';
import HeaderBreadcrumb from '../../../../components/page/HeaderBreadcrumb/HeaderBreadcrumb';
import Loading from '../../../../components/page/Loading';
import {
  ASSIGN_PLAN_URL,
  ASSIGN_PLANS,
  END_DATE,
  HOME,
  HOME_URL,
  INTERVENTION,
  NO_PLANS_LOADED_MESSAGE,
  OPENSRP_PLANS,
  PLAN_STATUS,
  REPORT_IRS_PLAN_URL,
  START_DATE,
  TITLE,
} from '../../../../constants';
import { OpenSRPService } from '../../../../services/opensrp';
import IRSPlansReducer, {
  reducerName as IRSPlansReducerName,
} from '../../../../store/ducks/generic/plans';
import {
  extractPlanRecordResponseFromPlanPayload,
  fetchPlanRecords,
  getPlanRecordsArray,
  InterventionType,
  PlanRecord,
  PlanRecordResponse,
  PlanStatus,
} from '../../../../store/ducks/plans';

/** register the plan definitions reducer */
reducerRegistry.register(IRSPlansReducerName, IRSPlansReducer);

/** interface for PlanAssignmentsListProps props */
interface PlanAssignmentsListProps {
  fetchPlans: typeof fetchPlanRecords;
  plans: PlanRecord[];
  service: typeof OpenSRPService;
}

/** Simple component that loads plans and allows you to manage plan-jurisdiction-organization assignments */
const IRSAssignmentPlansList = (props: PlanAssignmentsListProps) => {
  const { fetchPlans, plans, service } = props;
  const controller = new AbortController();
  const signal = controller.signal;

  const OpenSrpPlanService = new service(OPENSRP_PLANS, signal);

  const pageTitle: string = `${ASSIGN_PLANS}`;

  const breadcrumbProps = {
    currentPage: {
      label: pageTitle,
      url: REPORT_IRS_PLAN_URL,
    },
    pages: [
      {
        label: HOME,
        url: HOME_URL,
      },
    ],
  };

  /** async function to load the data */
  async function loadData() {
    try {
      await OpenSrpPlanService.list()
        .then(planResults => {
          if (planResults) {
            const planRecords: PlanRecordResponse[] =
              planResults.map(extractPlanRecordResponseFromPlanPayload) || [];
            return fetchPlans(planRecords);
          }
        })
        .catch(err => {
          // console.log('ERR', err)
        });
    } catch (e) {
      // do something with the error?
    }
  }

  useEffect(() => {
    loadData();
    return () => controller.abort();
  }, []);

  if (plans.length < 1) {
    return <Loading />;
  }

  const listViewProps = {
    data: plans.map(planObj => {
      return [
        <Link to={`${ASSIGN_PLAN_URL}/${planObj.plan_id}`} key={planObj.plan_id}>
          {planObj.plan_title}
        </Link>,
        planObj.plan_intervention_type,
        planObj.plan_effective_period_start,
        planObj.plan_effective_period_end,
        planObj.plan_status,
      ];
    }),
    headerItems: [TITLE, INTERVENTION, START_DATE, END_DATE, PLAN_STATUS],
    tableClass: 'table table-bordered plans-list',
  };

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <HeaderBreadcrumb {...breadcrumbProps} />
      <Row>
        <Col md={8}>
          <h3 className="mt-3 mb-3 page-title">{pageTitle}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {plans.length < 1 ? (
            <span>{NO_PLANS_LOADED_MESSAGE}</span>
          ) : (
            <ListView {...listViewProps} />
          )}
        </Col>
      </Row>
    </div>
  );
};

/** Declare default props for IRSAssignmentPlansList */
const defaultProps: PlanAssignmentsListProps = {
  fetchPlans: fetchPlanRecords,
  plans: [],
  service: OpenSRPService,
};

IRSAssignmentPlansList.defaultProps = defaultProps;

export { IRSAssignmentPlansList };

/** Connect the component to the store */

/** interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  plans: PlanRecord[];
}

/** map state to props */
const mapStateToProps = (state: Partial<Store>): DispatchedStateProps => {
  const planStatus = [PlanStatus.ACTIVE];
  const fiPlans = getPlanRecordsArray(state, InterventionType.FI, planStatus);
  const irsPlans = getPlanRecordsArray(state, InterventionType.IRS, planStatus);
  const mdaPlans = getPlanRecordsArray(state, InterventionType.MDA, planStatus);
  const plans = [...fiPlans, ...irsPlans, ...mdaPlans].sort(
    (a: PlanRecord, b: PlanRecord) => Date.parse(b.plan_date) - Date.parse(a.plan_date)
  );
  return {
    plans,
  };
};

/** map dispatch to props */
const mapDispatchToProps = { fetchPlans: fetchPlanRecords };

/** Connected ConnectedIRSAssignmentPlansList component */
const ConnectedIRSAssignmentPlansList = connect(
  mapStateToProps,
  mapDispatchToProps
)(IRSAssignmentPlansList);

export default ConnectedIRSAssignmentPlansList;
