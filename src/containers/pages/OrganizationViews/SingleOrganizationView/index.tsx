/** The Single Organizations view page:
 * lists details pertaining to a specific organization
 */
import ListView from '@onaio/list-view';
import reducerRegistry from '@onaio/redux-reducer-registry';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { toast } from 'react-toastify';
import { Col, Row } from 'reactstrap';
import { Store } from 'redux';
import LinkAsButton from '../../../../components/LinkAsButton';
import HeaderBreadcrumb, {
  BreadCrumbProps,
} from '../../../../components/page/HeaderBreadcrumb/HeaderBreadcrumb';
import Loading from '../../../../components/page/Loading';
import {
  ACTIONS,
  ASSIGN,
  ASSIGN_PRACTITIONERS_URL,
  DETAILS,
  EDIT,
  EDIT_ORGANIZATION_URL,
  HOME,
  HOME_URL,
  IDENTIFIER,
  MEMBERS,
  NAME,
  OPENSRP_DEL_PRACTITIONER_ROLE_ENDPOINT,
  ORGANIZATION_LABEL,
  ORGANIZATIONS_LABEL,
  ORGANIZATIONS_LIST_URL,
  PRACTITIONER,
  REMOVE,
  REMOVED_FROM,
  REMOVING_PRACTITIONER_FAILED,
  SINGLE_ORGANIZATION_URL,
  USERNAME,
} from '../../../../constants';
import { growl, RouteParams } from '../../../../helpers/utils';
import { OpenSRPService } from '../../../../services/opensrp';
import organizationsReducer, {
  fetchOrganizations,
  getOrganizationById,
  Organization,
  reducerName as organizationsReducerName,
} from '../../../../store/ducks/opensrp/organizations';
import PractitionerReducer, {
  fetchPractitionerRoles,
  fetchPractitioners,
  getPractitionersByOrgId,
  Practitioner,
  reducerName as practitionerReducerName,
} from '../../../../store/ducks/opensrp/practitioners';
import { loadOrganization, loadOrgPractitioners } from '../helpers/serviceHooks';
import './index.css';

reducerRegistry.register(organizationsReducerName, organizationsReducer);
reducerRegistry.register(practitionerReducerName, PractitionerReducer);

/** interface to describe props for SingleOrganizationView */
interface SingleOrganizationViewProps {
  organization: Organization | null;
  practitioners: Practitioner[];
  serviceClass: typeof OpenSRPService;
  fetchOrganizationsAction: typeof fetchOrganizations;
  fetchPractitionerRolesAction: typeof fetchPractitionerRoles;
  fetchPractitionersAction: typeof fetchPractitioners;
}

/** the default props for SingleOrganizationView */
const defaultProps: SingleOrganizationViewProps = {
  fetchOrganizationsAction: fetchOrganizations,
  fetchPractitionerRolesAction: fetchPractitionerRoles,
  fetchPractitionersAction: fetchPractitioners,
  organization: null,
  practitioners: [],
  serviceClass: OpenSRPService,
};

/** the interface for all SingleOrganizationView props  */
type SingleOrgViewPropsType = SingleOrganizationViewProps & RouteComponentProps<RouteParams>;

/** the Single organization View dumb component */
const SingleOrganizationView = (props: SingleOrgViewPropsType) => {
  const {
    organization,
    practitioners,
    serviceClass,
    fetchOrganizationsAction,
    fetchPractitionerRolesAction,
    fetchPractitionersAction,
  } = props;
  const controller = new AbortController();
  const signal = controller.signal;

  const orgId = props.match.params.id ? props.match.params.id : '';

  // functions / methods //

  /** Un-assign Practitioner from organization
   * @param {practitionerId} practitioner - the practitioner
   * @param {organizationId} org - the organization
   * @param {serviceClass} service - the openSRP service
   * @param {AbortSignal} abortSignal - used to communicate with/abort a DOM request.
   */
  const unassignPractitioner = async (
    practitioner: Practitioner,
    org: Organization,
    service: typeof serviceClass = OpenSRPService,
    abortSignal: AbortSignal
  ) => {
    const serve = new service(OPENSRP_DEL_PRACTITIONER_ROLE_ENDPOINT, abortSignal);
    const params = { organization: org.identifier, practitioner: practitioner.identifier };
    serve
      .delete(params)
      .then(() => {
        // remove the practitioner Role
        growl(`${practitioner.name}-${practitioner.username} ${REMOVED_FROM} ${org.name}`, {
          type: toast.TYPE.INFO,
        });
        loadOrgPractitioners(
          orgId,
          serviceClass,
          fetchPractitionerRolesAction,
          fetchPractitionersAction,
          abortSignal
        );
      })
      .catch((err: Error) => growl(REMOVING_PRACTITIONER_FAILED, { type: toast.TYPE.ERROR }));
  };

  useEffect(() => {
    loadOrganization(orgId, serviceClass, fetchOrganizationsAction, signal);
    loadOrgPractitioners(
      orgId,
      serviceClass,
      fetchPractitionerRolesAction,
      fetchPractitionersAction,
      signal
    );
  }, []);

  if (!organization) {
    return <Loading />;
  }

  // props //

  // props for the header breadcrumb
  const basePage = {
    label: ORGANIZATIONS_LABEL,
    url: ORGANIZATIONS_LIST_URL,
  };
  const breadcrumbProps: BreadCrumbProps = {
    currentPage: {
      label: organization!.name,
      url: `${SINGLE_ORGANIZATION_URL}/${organization!.identifier}`,
    },
    pages: [],
  };
  const homePage = {
    label: `${HOME}`,
    url: `${HOME_URL}`,
  };
  breadcrumbProps.pages = [homePage, basePage];

  // listViewProps for organization members
  const listViewProps = {
    data: [
      ...practitioners.map((practitioner: any) => [
        practitioner.username,
        practitioner.name,
        <a
          className="unassign-link text-danger"
          key={practitioner.identifier}
          // tslint:disable-next-line: jsx-no-lambda
          onClick={e => {
            e.preventDefault();
            unassignPractitioner(practitioner, organization, serviceClass, signal);
          }}
        >
          {REMOVE}
        </a>,
      ]),
      /** link to remove this practitioner from this organization, effectively delete this practitioner role */
    ],
    headerItems: [USERNAME, NAME, ACTIONS],
    tableClass: 'table table-bordered',
  };

  // LinkAsButton Props
  const linkAsButtonProps = {
    text: `${EDIT} ${ORGANIZATION_LABEL}`,
    to: `${EDIT_ORGANIZATION_URL}/${organization!.identifier}`,
  };

  const assignPractitionersButton = {
    classNameProp: 'focus-investigation btn btn-primary float-right mt-5 mr-3',
    text: `${ASSIGN} ${PRACTITIONER}`,
    to: `${ASSIGN_PRACTITIONERS_URL}/${organization!.identifier}`,
  };

  return (
    <div>
      <Helmet>
        <title>{`${ORGANIZATION_LABEL} - ${organization.name}`}</title>
      </Helmet>
      <HeaderBreadcrumb {...breadcrumbProps} />
      <br />
      <Row>
        <Col className="xs">
          <h2 className="mb-3 mt-5 page-title">{organization.name}</h2>
        </Col>
        <Col className="link-as-button xs">
          <LinkAsButton {...linkAsButtonProps} />
          <LinkAsButton {...assignPractitionersButton} />
        </Col>
      </Row>
      <hr />
      <div id="organization-details" className="card mb-3">
        <div className="card-header">{`${ORGANIZATION_LABEL} ${DETAILS}`}</div>
        <div className="card-body">
          <Row>
            <Col className="col-6">
              <Row>
                <Col className="text-muted mb-4 col-6">{IDENTIFIER}</Col>
                <Col className="mb-4 col-6">{organization.identifier}</Col>
              </Row>
            </Col>
            <Col className="col-6">
              <Row>
                <Col className="text-muted mb-4 col-6">{NAME}</Col>
                <Col className="mb-4 col-6">{organization.name}</Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <h3 className="mb-3 mt-5">{`${ORGANIZATION_LABEL} ${MEMBERS}`}</h3>
      <ListView {...listViewProps} />
    </div>
  );
};

SingleOrganizationView.defaultProps = defaultProps;

export { SingleOrganizationView };

// connecting the component to the store

/** interface to describe props from mapStateToProps */
interface MapStateToProps {
  organization: Organization | null;
  practitioners: any;
}

/** Maps a prop to a selector from the organizations dux module */
const mapStateToProps = (
  state: Partial<Store>,
  ownProps: SingleOrgViewPropsType
): MapStateToProps => {
  let organizationId = ownProps.match.params.id;
  organizationId = organizationId ? organizationId : '';

  const organization = getOrganizationById(state, organizationId);
  const practitioners = getPractitionersByOrgId(state, organizationId);

  return {
    organization,
    practitioners,
  };
};

/** map props to action creators */
const mapDispatchToProps = {
  fetchOrganizationsAction: fetchOrganizations,
  fetchPractitionerRolesAction: fetchPractitionerRoles,
  fetchPractitionersAction: fetchPractitioners,
};

/** The connected component */
const ConnectedSingleOrgView = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleOrganizationView);

export default ConnectedSingleOrgView;
