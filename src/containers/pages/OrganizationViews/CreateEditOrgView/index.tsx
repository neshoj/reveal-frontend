/** New Team View page:
 * displays form that's used to create a new team or update openSRP api
 */
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Col, Row } from 'reactstrap';
import { Store } from 'redux';
import HeaderBreadcrumb, {
  BreadCrumbProps,
} from '../../../../components/page/HeaderBreadcrumb/HeaderBreadcrumb';
import {
  CREATE_ORGANIZATION_URL,
  EDIT_ORGANIZATION_URL,
  EDIT_TEAM,
  HOME,
  HOME_URL,
  NEW_TEAM,
  OPENSRP_ORGANIZATION_ENDPOINT,
  ORGANIZATIONS_LABEL,
  ORGANIZATIONS_LIST_URL,
} from '../../../../constants';
import { RouteParams } from '../../../../helpers/utils';
import { OpenSRPService } from '../../../../services/opensrp';
import store from '../../../../store';
import {
  fetchOrganizations,
  getOrganizationById,
  Organization,
} from '../../../../store/ducks/opensrp/organizations';
import OrganizationForm, {
  defaultInitialValues,
  OrganizationFormFields,
  OrganizationFormProps,
} from '../../../forms/OrganizationForm';

/** props for create and editing an organization view */
export interface Props {
  fetchOrganizationsCreator: typeof fetchOrganizations;
  organization: Organization | null;
  serviceClass: typeof OpenSRPService;
}

/** default props for createEditOrganization component */
export const defaultProps: Props = {
  fetchOrganizationsCreator: fetchOrganizations,
  organization: null,
  serviceClass: OpenSRPService,
};

/** type intersection for all types that pertain to the props */
export type CreateEditTeamViewTypes = Props & RouteComponentProps<RouteParams>;

/** CreateEditTeamView component */
const CreateEditOrgView = (props: CreateEditTeamViewTypes) => {
  const { organization, serviceClass, fetchOrganizationsCreator } = props;
  // use route to know if we are editing team or creating team
  const editing = !!props.match.params.id;

  //  props for breadcrumbs
  const basePage = {
    label: ORGANIZATIONS_LABEL,
    url: ORGANIZATIONS_LIST_URL,
  };
  const breadcrumbProps: BreadCrumbProps = {
    currentPage: {
      label: editing ? EDIT_TEAM : NEW_TEAM,
      url: editing
        ? `${EDIT_ORGANIZATION_URL}/${organization!.identifier}`
        : CREATE_ORGANIZATION_URL,
    },
    pages: [],
  };
  const homePage = {
    label: `${HOME}`,
    url: `${HOME_URL}`,
  };
  breadcrumbProps.pages = [homePage, basePage];

  /** props for the organization form */
  const organizationFormProps: OrganizationFormProps = {
    disabledFields: [],
    initialValues: editing ? (organization as OrganizationFormFields) : defaultInitialValues,
    redirectAfterAction: ORGANIZATIONS_LIST_URL,
  };

  /** Load single organization
   * @param {typeof serviceClass} service - opensrp service
   * @param {string} id -  identifier of organization to get
   * @param {typeof fetchOrganizationsCreator} - action creator
   */
  const loadOrganization = async (
    service: typeof serviceClass,
    id: string,
    actionCreator: typeof fetchOrganizationsCreator = fetchOrganizationsCreator
  ) => {
    const serve = new service(`${OPENSRP_ORGANIZATION_ENDPOINT}/${id}`);
    serve
      .list()
      .then((response: Organization[]) => store.dispatch(actionCreator(response)))
      .catch((err: Error) => {
        /** TODO - find something to do with error */
      });
  };

  useEffect(() => {
    if (organization !== null) {
      loadOrganization(serviceClass, organization!.identifier);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>{organization === null ? NEW_TEAM : EDIT_TEAM}</title>
      </Helmet>
      <HeaderBreadcrumb {...breadcrumbProps} />
      <Row>
        <Col md={8}>
          <OrganizationForm {...organizationFormProps} />
        </Col>
      </Row>
    </div>
  );
};

CreateEditOrgView.defaultProps = defaultProps;

export { CreateEditOrgView };

/** Interface for connected state to props */
interface DispatchedProps {
  organization: Organization | null;
}

// connect to store
const mapStateToProps = (
  state: Partial<Store>,
  ownProps: CreateEditTeamViewTypes
): DispatchedProps => {
  let teamId = ownProps.match.params.id;
  teamId = teamId ? teamId : '';

  const organization = getOrganizationById(state, teamId);
  return { organization };
};

/** map props to action creators */
const mapDispatchToProps = {
  fetchOrganizationsCreator: fetchOrganizations,
};

const ConnectedCreateEditOrgView = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEditOrgView);

export default ConnectedCreateEditOrgView;
