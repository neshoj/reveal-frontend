import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { User } from '@onaio/session-reducer';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from 'reactstrap';
import logo from '../../../assets/images/logo.png';
import {
  ENABLE_ABOUT,
  ENABLE_ASSIGN,
  ENABLE_FI,
  ENABLE_IRS,
  ENABLE_PRACTITIONERS,
  ENABLE_TEAMS,
  ENABLE_USERS,
  OPENSRP_LOGOUT_URL,
  WEBSITE_NAME,
} from '../../../configs/env';
import {
  ABOUT,
  ADMIN,
  ASSIGN,
  ASSIGN_PLAN_URL,
  FI_URL,
  FOCUS_INVESTIGATION,
  HOME,
  INTERVENTION_IRS_DRAFTS_URL,
  INTERVENTION_IRS_URL,
  IRS_REPORTING_TITLE,
  IRS_TITLE,
  LOGIN,
  LOGIN_URL,
  LOGOUT_URL,
  MONITOR,
  ORGANIZATIONS_LABEL,
  ORGANIZATIONS_LIST_URL,
  PLAN_LIST_URL,
  PLAN_TITLE,
  PLANS,
  PRACTITIONERS,
  PRACTITIONERS_LIST_URL,
  REPORT_IRS_PLAN_URL,
  SIGN_OUT,
  USERS,
} from '../../../constants';
import './Header.css';

/** interface for Header state */
interface State {
  isOpen: boolean;
}

/** interface for HeaderProps */
export interface HeaderProps extends RouteComponentProps {
  authenticated: boolean;
  user: User;
}

/** default props for Header */
const defaultHeaderProps: Partial<HeaderProps> = {
  authenticated: false,
  user: {
    email: '',
    name: '',
    username: '',
  },
};

/** The Header component */
export class HeaderComponent extends React.Component<HeaderProps, State> {
  public static defaultProps = defaultHeaderProps;

  constructor(props: HeaderProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  public render() {
    const { authenticated, user } = this.props;
    const path = this.props.location.pathname;
    return (
      <div>
        <Navbar light={true} expand="md">
          <nav className="navbar navbar-expand-md navbar-light header-logo-navbar">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt={WEBSITE_NAME} />
            </Link>
          </nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="mr-auto" navbar={true}>
              <NavItem>
                <NavLink
                  to="/"
                  className={path === '/' ? 'nav-link active' : 'nav-link'}
                  activeClassName="active"
                >
                  {HOME}
                </NavLink>
              </NavItem>

              {(ENABLE_IRS || ENABLE_FI) && (
                <UncontrolledDropdown nav={true} inNavbar={true}>
                  <DropdownToggle
                    nav={true}
                    caret={true}
                    className={path === INTERVENTION_IRS_URL ? 'nav-link active' : 'nav-link'}
                  >
                    {PLAN_TITLE}
                  </DropdownToggle>
                  <DropdownMenu right={true}>
                    <DropdownItem>
                      <NavLink to={PLAN_LIST_URL} className="nav-link" activeClassName="active">
                        {PLANS}
                      </NavLink>
                    </DropdownItem>
                    {ENABLE_IRS && (
                      <DropdownItem>
                        <NavLink
                          to={INTERVENTION_IRS_DRAFTS_URL}
                          className="nav-link"
                          activeClassName="active"
                        >
                          {IRS_TITLE}
                        </NavLink>
                      </DropdownItem>
                    )}
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}

              {ENABLE_ASSIGN && (
                <NavItem>
                  <NavLink to={ASSIGN_PLAN_URL} className="nav-link" activeClassName="active">
                    {ASSIGN}
                  </NavLink>
                </NavItem>
              )}

              {(ENABLE_IRS || ENABLE_FI) && (
                <UncontrolledDropdown nav={true} inNavbar={true}>
                  <DropdownToggle
                    nav={true}
                    caret={true}
                    className={path === FI_URL ? 'nav-link active' : 'nav-link'}
                  >
                    {MONITOR}
                  </DropdownToggle>
                  <DropdownMenu right={true}>
                    {ENABLE_FI && (
                      <div>
                        <DropdownItem>
                          <NavLink to={FI_URL} className="nav-link" activeClassName="active">
                            {FOCUS_INVESTIGATION}
                          </NavLink>
                        </DropdownItem>
                      </div>
                    )}
                    {ENABLE_IRS && (
                      <div>
                        <DropdownItem>
                          <NavLink
                            to={REPORT_IRS_PLAN_URL}
                            className="nav-link"
                            activeClassName="active"
                          >
                            {IRS_REPORTING_TITLE}
                          </NavLink>
                        </DropdownItem>
                      </div>
                    )}
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}

              {(ENABLE_TEAMS || ENABLE_PRACTITIONERS || ENABLE_USERS) && (
                <UncontrolledDropdown nav={true} inNavbar={true}>
                  <DropdownToggle nav={true} caret={true} className={'nav-link'}>
                    {ADMIN}
                  </DropdownToggle>
                  <DropdownMenu right={true}>
                    {ENABLE_TEAMS && (
                      <DropdownItem>
                        <NavLink
                          to={`${ORGANIZATIONS_LIST_URL}`}
                          className="nav-link"
                          activeClassName="active"
                        >
                          {ORGANIZATIONS_LABEL}
                        </NavLink>
                      </DropdownItem>
                    )}
                    {ENABLE_PRACTITIONERS && (
                      <DropdownItem>
                        <NavLink
                          to={`${PRACTITIONERS_LIST_URL}`}
                          className="nav-link"
                          activeClassName="active"
                        >
                          {PRACTITIONERS}
                        </NavLink>
                      </DropdownItem>
                    )}
                    {ENABLE_USERS && (
                      <DropdownItem>
                        <NavLink to="/404" className="nav-link" activeClassName="active">
                          {USERS}
                        </NavLink>
                      </DropdownItem>
                    )}
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}

              {ENABLE_ABOUT && (
                <NavItem>
                  <NavLink to="/404" className="nav-link" activeClassName="active">
                    {ABOUT}
                  </NavLink>
                </NavItem>
              )}
            </Nav>
            <Nav className="ml-0" navbar={true}>
              {authenticated ? (
                <UncontrolledDropdown nav={true} inNavbar={true}>
                  <DropdownToggle nav={true} caret={true}>
                    <FontAwesomeIcon icon={['far', 'user']} /> {user.username}
                  </DropdownToggle>
                  <DropdownMenu right={true}>
                    <DropdownItem>
                      <NavLink to={LOGOUT_URL} className="nav-link" activeClassName="active">
                        {SIGN_OUT}
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <NavLink to={LOGIN_URL} className="nav-link" activeClassName="active">
                  {LOGIN}
                </NavLink>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  private toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
}

const Header = withRouter(HeaderComponent);

export default Header;
