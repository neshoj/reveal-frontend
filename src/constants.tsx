import { FIReasons, PlanActionCodes } from './configs/settings';
import { FIReasonType } from './containers/forms/PlanForm/types';

// strings
export const MAP = 'map';
export type MAP = typeof MAP;
export const LOCATION = 'Location';
export type LOCATION = typeof LOCATION;
export const PROVINCE = 'Province';
export type PROVINCE = typeof PROVINCE;
export const HOME = 'Home';
export type HOME = typeof HOME;
export const FOCUS_INVESTIGATION = 'Focus Investigation';
export type FOCUS_INVESTIGATION = typeof FOCUS_INVESTIGATION;
export const CURRENT_FOCUS_INVESTIGATION = 'Current Focus Investigations';
export type CURRENT_FOCUS_INVESTIGATION = typeof CURRENT_FOCUS_INVESTIGATION;
export const COMPLETE_FOCUS_INVESTIGATION = 'Complete Focus Investigations';
export type COMPLETE_FOCUS_INVESTIGATION = typeof COMPLETE_FOCUS_INVESTIGATION;
export const INVESTIGATION = 'Investigation';
export type INVESTIGATION = typeof INVESTIGATION;
export const ACTIVE_FOCUS_INVESTIGATION = 'Active Focus Investigations';
export type ACTIVE_FOCUS_INVESTIGATION = typeof ACTIVE_FOCUS_INVESTIGATION;
export const FOCUS_AREA_INFO = 'Focus Area Information';
export type FOCUS_AREA_INFO = typeof FOCUS_AREA_INFO;
export const FOCUS_INVESTIGATIONS = 'Focus Investigations';
export type FOCUS_INVESTIGATIONS = typeof FOCUS_INVESTIGATIONS;
export const MAP_ID = 'map-1';
export type MAP_ID = typeof MAP_ID;
export const GEOJSON = 'geojson';
export type GEOJSON = typeof GEOJSON;
export const STRINGIFIED_GEOJSON = 'stringified-geojson';
export type STRINGIFIED_GEOJSON = typeof STRINGIFIED_GEOJSON;
export const FOCUS_AREA_HEADER = 'Focus Area';
export type FOCUS_AREA_HEADER = typeof FOCUS_AREA_HEADER;
export const INVESTIGATION_NAME_HEADER = 'Investigation Name';
export type INVESTIGATION_NAME_HEADER = typeof INVESTIGATION_NAME_HEADER;
export const REASON_HEADER = 'Reason';
export type REASON_HEADER = typeof REASON_HEADER;
export const STATUS_HEADER = 'Status';
export type STATUS_HEADER = typeof STATUS_HEADER;
export const CASE_NOTIF_DATE_HEADER = 'Case Notif. Date';
export type CASE_NOTIF_DATE_HEADER = typeof CASE_NOTIF_DATE_HEADER;
export const CASE_CLASSIFICATION_HEADER = 'Case Class.';
export type CASE_CLASSIFICATION_HEADER = typeof CASE_CLASSIFICATION_HEADER;
export const DEFINITIONS = 'Definitions';
export type DEFINITIONS = typeof DEFINITIONS;
export const IN = 'in';
export type IN = typeof IN;
export const DISTRICT = 'District';
export type DISTRICT = typeof DISTRICT;
export const CANTON = 'Canton';
export type CANTON = typeof CANTON;
export const VILLAGE = 'Village';
export type VILLAGE = typeof VILLAGE;
export const FI_REASON = 'FI Reason';
export type FI_REASON = typeof FI_REASON;
export const FI_STATUS = 'FI Status';
export type FI_STATUS = typeof FI_STATUS;
export const ACTIVE_INVESTIGATION = 'Active Investigation';
export type ACTIVE_INVESTIGATION = typeof ACTIVE_INVESTIGATION;
export const COMPLETE = 'Complete';
export type COMPLETE = typeof COMPLETE;
export const NO = 'No';
export type NO = typeof NO;
export const RESPONSE = 'Response';
export type RESPONSE = typeof RESPONSE;
export const MEASURE = 'Measure';
export type MEASURE = typeof MEASURE;
export const OF = 'of';
export type OF = typeof OF;
export const IS = 'is';
export type IS = typeof IS;
export const MARK = 'Mark';
export type MARK = typeof MARK;
export const AS = 'as';
export type AS = typeof AS;
export const MARK_AS_COMPLETE = 'Mark as complete';
export type MARK_AS_COMPLETE = typeof MARK_AS_COMPLETE;
export const TARGET = 'Target';
export type TARGET = typeof TARGET;
export const POLYGON = 'Polygon';
export type POLYGON = typeof POLYGON;
export const MULTI_POLYGON = 'MultiPolygon';
export type MULTI_POLYGON = typeof MULTI_POLYGON;
export const POINT = 'Point';
export type POINT = typeof POINT;
export const FEATURE = 'Feature';
export type FEATURE = typeof FEATURE;
export const FEATURE_COLLECTION = 'FeatureCollection';
export type FEATURE_COLLECTION = typeof FEATURE_COLLECTION;
export const MAIN_PLAN = 'main-plan-layer';
export type MAIN_PLAN = typeof MAIN_PLAN;
export const APP = 'APP';
export type APP = typeof APP;
export const NO_GEOMETRIES_RESPONSE = 'Goals have no Geometries';
export type NO_GEOMETRIES_RESPONSE = typeof NO_GEOMETRIES_RESPONSE;
export const STRUCTURE_LAYER = 'structure-layer';
export type STRUCTURE_LAYER = typeof STRUCTURE_LAYER;
export const PROGRESS = 'Progress';
export type PROGRESS = typeof PROGRESS;
export const STRUCTURE = 'structure';
export type STRUCTURE = typeof STRUCTURE;
export const STRUCTURES = 'structure(s)';
export type STRUCTURES = typeof STRUCTURES;
export const PERSONS = 'person(s)';
export type PERSONS = typeof PERSONS;
export const CASE_TRIGGERED: FIReasonType = FIReasons[1];
export const ROUTINE: FIReasonType = FIReasons[0];
export const REACTIVE = 'Reactive';
export type REACTIVE = typeof REACTIVE;
export const REQUIRED = 'Required';
export type REQUIRED = typeof REQUIRED;
export const SAVING = 'Saving';
export type SAVING = typeof SAVING;
export const DATE = 'Date';
export type DATE = typeof DATE;
export const PLANS = 'Manage Plans';
export type PLANS = typeof PLANS;
export const PLANNING = 'Planning';
export type PLANNING = typeof PLANNING;
export const MONITOR = 'Monitor';
export type MONITOR = typeof MONITOR;
export const ADMIN = 'Admin';
export type ADMIN = typeof ADMIN;
export const REPORTING = 'Reporting';
export type REPORTING = typeof REPORTING;
export const DRAFTS_PARENTHESIS = '(drafts)';
export type DRAFTS_PARENTHESIS = typeof DRAFTS_PARENTHESIS;
export const CONFIRM = 'Confirm';
export type CONFIRM = typeof CONFIRM;
export const CANCEL = 'Cancel';
export type CANCEL = typeof CANCEL;
export const IRS_PLANS = 'IRS Plans';
export type IRS_PLANS = typeof IRS_PLANS;
export const COUNTRY = 'Country';
export type COUNTRY = typeof COUNTRY;
export const NEW = 'new';
export type NEW = typeof NEW;
export const NEW_TITLE = 'New';
export type NEW_TITLE = typeof NEW_TITLE;
export const DRAFT = 'draft';
export type DRAFT = typeof DRAFT;
export const REPORT = 'report';
export type REPORT = typeof REPORT;
export const PLAN = 'plan';
export type PLAN = typeof PLAN;
export const PLAN_TITLE = 'Plan';
export type PLAN_TITLE = typeof PLAN_TITLE;
export const TEAMS = 'Teams';
export type TEAMS = typeof TEAMS;
export const TEAM = 'Team';
export type TEAM = typeof TEAM;
export const EDIT_TEAM = 'Edit Team';
export type EDIT_TEAM = typeof EDIT_TEAM;
export const NEW_TEAM = 'New Team';
export const TEAM_DETAILS = 'Team Details';
export type TEAM_DETAILS = typeof TEAM_DETAILS;
export const TEAM_MEMBERS = 'Team Members';
export type TEAM_MEMBERS = typeof TEAM_MEMBERS;
export const ORGANIZATION = 'Organization';
export type ORGANIZATION = typeof ORGANIZATION;
export const SEARCH = 'Search';
export type SEARCH = typeof SEARCH;
export const COUNT = 'Count';
export const SUPERVISOR = 'Supervisor';
export type SUPERVISOR = typeof SUPERVISOR;
export const ACTIONS = 'Actions';
export type ACTIONS = typeof ACTIONS;
export type COUNT = typeof COUNT;
export const DETAILS = 'Details';
export type DETAILS = typeof DETAILS;
export const MEMBERS = 'Members';
export type MEMBERS = typeof MEMBERS;
export const IDENTIFIER = 'Identifier';
export type IDENTIFIER = typeof IDENTIFIER;
export const USERNAME = 'Username';
export type USERNAME = typeof USERNAME;
export const VIEW = 'view';
export type VIEW = typeof VIEW;
export const PRACTITIONER = 'Practitioner';
export type PRACTITIONER = typeof PRACTITIONER;
export const PRACTITIONERS = 'Practitioners';
export type PRACTITIONERS = typeof PRACTITIONERS;
export const ID = 'Id';
export type ID = typeof ID;
export const SAVE = 'Save';
export type SAVE = typeof SAVE;
export const CLEAR = 'Clear';
export type CLEAR = typeof CLEAR;
export const ACTIVE = 'Active';
export type ACTIVE = typeof ACTIVE;
export const ASSIGN = 'Assign';
export type ASSIGN = typeof ASSIGN;
export const NO_TEAMS_LOADED_MESSAGE = 'No teams loaded...';
export type NO_TEAMS_LOADED_MESSAGE = typeof NO_TEAMS_LOADED_MESSAGE;
export const SELECT_TEAMS_TO_ASSIGN = 'Select Teams to Assign';
export type SELECT_TEAMS_TO_ASSIGN = typeof SELECT_TEAMS_TO_ASSIGN;
export const ASSIGN_TEAMS = 'Assign Teams';
export type ASSIGN_TEAMS = typeof ASSIGN_TEAMS;
export const TEAMS_ASSIGNED = 'Teams Assigned';
export type TEAMS_ASSIGNED = typeof TEAMS_ASSIGNED;
export const ASSIGNMENT = 'Assignment';
export type ASSIGNMENT = typeof ASSIGNMENT;
export const ASSIGNING = 'Assigning';
export type ASSIGNING = typeof ASSIGNING;
export const YES = 'Yes';
export type YES = typeof YES;
export const EDIT = 'Edit';
export type EDIT = typeof EDIT;
export const ADD = 'Add';
export type ADD = typeof ADD;
export const REMOVE = 'Remove';
export type REMOVE = typeof REMOVE;
export const SAVE_TEAM = 'Save Team';
export type SAVE_TEAM = typeof SAVE_TEAM;
export const SAVE_AS_DRAFT = 'Save as a Draft';
export type SAVE_AS_DRAFT = typeof SAVE_AS_DRAFT;
export const SAVE_FINALIZED_PLAN = 'Save Finalized Plan';
export type SAVE_FINALIZED_PLAN = typeof SAVE_FINALIZED_PLAN;
export const SAVE_ASSIGNMENTS = 'Save Assignments';
export type SAVE_ASSIGNMENTS = typeof SAVE_ASSIGNMENTS;
export const NO_PLANS_LOADED_MESSAGE = 'No plans found...';
export type NO_PLANS_LOADED_MESSAGE = typeof NO_PLANS_LOADED_MESSAGE;
export const SELECT = 'Select';
export type SELECT = typeof SELECT;
export const SELECT_USERNAME = 'Select username';
export type SELECT_USERNAME = typeof SELECT_USERNAME;
export const TO = 'To';
export type TO = typeof TO;
export const NO_INVESTIGATIONS_FOUND = 'No Investigations Found';
export type NO_INVESTIGATIONS_FOUND = typeof NO_INVESTIGATIONS_FOUND;
export const NO_PRACTITIONERS_ADDED_YET = 'No Practitioners Added yet';
export type NO_PRACTITIONERS_ADDED_YET = typeof NO_PRACTITIONERS_ADDED_YET;
export const PLAN_SELECT_PLACEHOLDER = 'Other plans in this area';
export type PLAN_SELECT_PLACEHOLDER = typeof PLAN_SELECT_PLACEHOLDER;
export const ASSIGN_PLANS = 'Assign Plans';
export type ASSIGN_PLANS = typeof ASSIGN_PLANS;
export const ONE_DAY_TO_GO = '1 day to go';
export type ONE_DAY_TO_GO = typeof ONE_DAY_TO_GO;
export const ZERO_DAYS_TO_GO = '0 days to go';
export type ZERO_DAYS_TO_GO = typeof ZERO_DAYS_TO_GO;
export const USERS = 'Users';
export type USERS = typeof USERS;
export const ABOUT = 'About';
export type ABOUT = typeof ABOUT;
export const SIGN_OUT = 'Sign Out';
export type SIGN_OUT = typeof SIGN_OUT;
export const LOGIN = 'Login';
export type LOGIN = typeof LOGIN;

// TODO ? - do the below 2 belong here or in a settings file
export const ORGANIZATION_LABEL = TEAM;
export type ORGANIZATION_LABEL = typeof ORGANIZATION_LABEL;
export const ORGANIZATIONS_LABEL = TEAMS;
export type ORGANIZATIONS_LABEL = typeof ORGANIZATIONS_LABEL;

export const JURISDICTION_ID = 'jurisdiction_id';
export type JURISDICTION_ID = typeof JURISDICTION_ID;
export const JURISDICTIONID = 'jurisdictionId';
export type JURISDICTIONID = typeof JURISDICTIONID;
export const PARENT_ID = 'parent_id';
export type PARENT_ID = typeof JURISDICTION_ID;
export const PARENTID = 'parentId';
export type PARENTID = typeof JURISDICTIONID;
export const START_DATE = 'Start Date';
export type START_DATE = typeof START_DATE;
export const END_DATE = 'End Date';
export type END_DATE = typeof END_DATE;
export const NAME = 'Name';
export type NAME = typeof NAME;
export const NEW_PLAN = 'New Plan';
export type NEW_PLAN = typeof NEW_PLAN;
export const CREATE_NEW_PLAN = 'Create New Plan';
export type CREATE_NEW_PLAN = typeof CREATE_NEW_PLAN;
export const ADD_PLAN = 'Add Plan';
export type ADD_PLAN = typeof ADD_PLAN;
export const UPDATE_PLAN = 'Update Plan';
export type UPDATE_PLAN = typeof UPDATE_PLAN;
export const ADD_FOCUS_INVESTIGATION = 'Add Focus Investigation';
export type ADD_FOCUS_INVESTIGATION = typeof ADD_FOCUS_INVESTIGATION;

export const DATE_COMPLETED = 'Date Completed';
export type DATE_COMPLETED = typeof DATE_COMPLETED;
// internal urls
export const LOGIN_URL = '/login';
export type LOGIN_URL = typeof LOGIN_URL;
export const LOGOUT_URL = '/logout';
export type LOGOUT_URL = typeof LOGOUT_URL;
export const HOME_URL = '/';
export type HOME_URL = typeof HOME_URL;
export const INTERVENTION_IRS_URL = '/intervention/irs';
export type INTERVENTION_IRS_URL = typeof INTERVENTION_IRS_URL;
export const INTERVENTION_IRS_DRAFTS_URL = '/intervention/irs/drafts';
export type INTERVENTION_IRS_DRAFTS_URL = typeof INTERVENTION_IRS_DRAFTS_URL;
export const NEW_IRS_PLAN_URL = '/intervention/irs/new';
export type NEW_IRS_PLAN_URL = typeof NEW_IRS_PLAN_URL;
export const DRAFT_IRS_PLAN_URL = '/intervention/irs/draft';
export type DRAFT_IRS_PLAN_URL = typeof DRAFT_IRS_PLAN_URL;
export const ACTIVE_IRS_PLAN_URL = `/intervention/irs/plan`;
export type ACTIVE_IRS_PLAN_URL = typeof ACTIVE_IRS_PLAN_URL;
export const REPORT_IRS_PLAN_URL = `/intervention/irs/report`;
export type REPORT_IRS_PLAN_URL = typeof REPORT_IRS_PLAN_URL;
export const ASSIGN_PLAN_URL = `/assign`;
export type ASSIGN_PLAN_URL = typeof ASSIGN_PLAN_URL;
export const FI_URL = '/focus-investigation';
export type FI_URL = typeof FI_URL;
export type FI_FILTER_URL = typeof FI_FILTER_URL;
export const FI_FILTER_URL = '/focus-investigation/filter';
export const FI_SINGLE_URL = '/focus-investigation/view';
export type FI_SINGLE_URL = typeof FI_SINGLE_URL;
export const FI_SINGLE_MAP_URL = '/focus-investigation/map';
export type FI_SINGLE_MAP_URL = typeof FI_SINGLE_MAP_URL;
export const NEW_PLAN_URL = '/plans/new';
export type NEW_PLAN_URL = typeof NEW_PLAN_URL;
export const PLAN_LIST_URL = '/plans/list';
export type PLAN_LIST_URL = typeof PLAN_LIST_URL;
export const PLAN_COMPLETION_URL = '/focus-investigation/view/complete';
export type PLAN_COMPLETION_URL = typeof PLAN_COMPLETION_URL;
export const PLAN_UPDATE_URL = '/plans/update';
export type PLAN_UPDATE_URL = typeof PLAN_UPDATE_URL;
export const CREATE_ORGANIZATION_URL = '/teams/new';
export type CREATE_ORGANIZATION_URL = typeof CREATE_ORGANIZATION_URL;
export const EDIT_ORGANIZATION_URL = '/teams/edit';
export type EDIT_ORGANIZATION_URL = typeof EDIT_ORGANIZATION_URL;
export const SINGLE_ORGANIZATION_URL = '/teams/view';
export type SINGLE_ORGANIZATION_URL = typeof SINGLE_ORGANIZATION_URL;
export const ORGANIZATIONS_LIST_URL = '/teams';
export type ORGANIZATIONS_LIST_URL = typeof ORGANIZATIONS_LIST_URL;
export const CREATE_PRACTITIONER_URL = '/practitioners/new';
export type CREATE_PRACTITIONER_URL = typeof CREATE_PRACTITIONER_URL;
export const EDIT_PRACTITIONER_URL = '/practitioners/edit';
export type EDIT_PRACTITIONER_URL = typeof EDIT_PRACTITIONER_URL;
export const ASSIGN_ORGANIZATION_URL = '/plans/teamAssignment';
export type ASSIGN_ORGANIZATION_URL = typeof ASSIGN_ORGANIZATION_URL;
export const PRACTITIONERS_LIST_URL = '/practitioners';
export type PRACTITIONERS_LIST_URL = typeof PRACTITIONERS_LIST_URL;
export const ASSIGN_PRACTITIONERS_URL = '/teams/assignPractitioners';
export type ASSIGN_PRACTITIONERS_URL = typeof ASSIGN_ORGANIZATION_URL;

// OpenSRP API strings
export const OPENSRP_PRACTITIONER_ENDPOINT = 'practitioner';
export type OPENSRP_PRACTITIONER_ENDPOINT = typeof OPENSRP_PRACTITIONER_ENDPOINT;
export const OPENSRP_PRACTITIONER_ROLE_ENDPOINT = 'practitionerRole';
export type OPENSRP_PRACTITIONER_ROLE_ENDPOINT = typeof OPENSRP_PRACTITIONER_ROLE_ENDPOINT;
export const OPENSRP_FIND_BY_PROPERTIES = 'findByProperties';
export type OPENSRP_FIND_BY_PROPERTIES = typeof OPENSRP_FIND_BY_PROPERTIES;
export const OPENSRP_LOCATION = 'location';
export type OPENSRP_LOCATION = typeof OPENSRP_LOCATION;
export const OPENSRP_PLANS = 'plans';
export type OPENSRP_PLANS = typeof OPENSRP_PLANS;
export const OPENSRP_PARENT_ID = 'parent_id';
export type OPENSRP_PARENT_ID = typeof OPENSRP_PARENT_ID;
export const OPENSRP_ORGANIZATION_ENDPOINT = 'organization';
export type OPENSRP_ORGANIZATION_ENDPOINT = typeof OPENSRP_ORGANIZATION_ENDPOINT;
export const OPENSRP_GET_ASSIGNMENTS_ENDPOINT = `${OPENSRP_ORGANIZATION_ENDPOINT}/assignedLocationsAndPlans`;
export type OPENSRP_GET_ASSIGNMENTS_ENDPOINT = typeof OPENSRP_GET_ASSIGNMENTS_ENDPOINT;
export const OPENSRP_POST_ASSIGNMENTS_ENDPOINT = `${OPENSRP_ORGANIZATION_ENDPOINT}/assignLocationsAndPlans`;
export type OPENSRP_POST_ASSIGNMENTS_ENDPOINT = typeof OPENSRP_POST_ASSIGNMENTS_ENDPOINT;
export const OPENSRP_ORG_PRACTITIONER_ENDPOINT = 'organization/practitioner';
export type OPENSRP_ORG_PRACTITIONER_ENDPOINT = typeof OPENSRP_ORG_PRACTITIONER_ENDPOINT;
export const OPENSRP_DEL_PRACTITIONER_ROLE_ENDPOINT = 'practitionerRole/deleteByPractitioner';
export type OPENSRP_DEL_PRACTITIONER_ROLE_ENDPOINT = typeof OPENSRP_DEL_PRACTITIONER_ROLE_ENDPOINT;
export const OPENSRP_ADD_PRACTITIONER_ROLE_ENDPOINT = 'practitionerRole/add';
export type OPENSRP_ADD_PRACTITIONER_ROLE_ENDPOINT = typeof OPENSRP_ADD_PRACTITIONER_ROLE_ENDPOINT;
export const OPENSRP_USERS_ENDPOINT = 'user';
export type OPENSRP_USERS_ENDPOINT = typeof OPENSRP_USERS_ENDPOINT;

// container pages title names
export const HOME_TITLE = `Home page`;
export type HOME_TITLE = typeof HOME_TITLE;
export const IRS_TITLE = 'IRS';
export type IRS_TITLE = typeof IRS_TITLE;
export const IRS_REPORTING_TITLE = 'IRS Reporting';
export type IRS_REPORTING_TITLE = typeof IRS_REPORTING_TITLE;
export const CONDITIONAL_FORMATTING_RULES = 'Conditional formatting rules';
export type CONDITIONAL_FORMATTING_RULES = typeof CONDITIONAL_FORMATTING_RULES;
export const CONDITIONAL_FORMATTING_TITLE = 'Conditional Formatting';
export type CONDITIONAL_FORMATTING_TITLE = typeof CONDITIONAL_FORMATTING_TITLE;
export const FOCUS_INVESTIGATION_START_TITLE = 'Focus Investigation Start';
export type FOCUS_INVESTIGATION_START_TITLE = typeof FOCUS_INVESTIGATION_START_TITLE;
export const FI_RESPONSE_ADHERENCE_TITLE = 'FI Response Adherence';
export type FI_RESPONSE_ADHERENCE_TITLE = typeof FI_RESPONSE_ADHERENCE_TITLE;

// colors
export const GREEN = 'Green';
export type GREEN = typeof GREEN;
export const YELLOW = 'Yellow';
export type YELLOW = typeof YELLOW;
export const ORANGE = 'Orange';
export type ORANGE = typeof ORANGE;
export const RED = 'Red';
export type RED = typeof RED;

// task action codes
export const BCC_CODE = PlanActionCodes[0];
export type BCC_CODE = typeof BCC_CODE;
export const IRS_CODE = PlanActionCodes[1];
export type IRS_CODE = typeof IRS_CODE;
export const BEDNET_DISTRIBUTION_CODE = PlanActionCodes[2];
export type BEDNET_DISTRIBUTION_CODE = typeof BEDNET_DISTRIBUTION_CODE;
export const BLOOD_SCREENING_CODE = PlanActionCodes[3];
export type BLOOD_SCREENING_CODE = typeof BLOOD_SCREENING_CODE;
export const CASE_CONFIRMATION_CODE = PlanActionCodes[4];
export type CASE_CONFIRMATION_CODE = typeof CASE_CONFIRMATION_CODE;
export const RACD_REGISTER_FAMILY_CODE = PlanActionCodes[5];
export type RACD_REGISTER_FAMILY_CODE = typeof RACD_REGISTER_FAMILY_CODE;
export const LARVAL_DIPPING_CODE = PlanActionCodes[6];
export type LARVAL_DIPPING_CODE = typeof LARVAL_DIPPING_CODE;
export const MOSQUITO_COLLECTION_CODE = PlanActionCodes[7];
export type MOSQUITO_COLLECTION_CODE = typeof MOSQUITO_COLLECTION_CODE;

export const PRACTITIONER_CODE = {
  text: 'Community Health Worker',
};
export type PRACTITIONER_CODE = typeof PRACTITIONER_CODE;
