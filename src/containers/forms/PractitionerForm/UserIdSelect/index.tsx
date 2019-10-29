/** wrapper around react-select component that enables one
 * to select a single user from openmrs
 */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { ValueType } from 'react-select/src/types';
import { OPENMRS_USERS_REQUEST_PAGE_SIZE } from '../../../../configs/env';
import { OpenSRPService } from '../../../../services/opensrp';

// props interface to UserIdSelect component
export interface Props {
  onChangeHandler?: (value: Option) => void;
  serviceClass: typeof OpenSRPService;
}

/** default props for UserIdSelect component */
export const defaultProps = {
  serviceClass: OpenSRPService,
};

/** interface for each select dropdown option */
export interface Option {
  label: string;
  value: string;
}

/** interface describing a user from openmrs */
interface OpenMRSUser {
  id: string;
}

/** The UserIdSelect component */
export const UserIdSelect: React.FC<Props> = props => {
  const { onChangeHandler: onChange } = props;
  const [openMRSUsers, setOpenMRSUsers] = useState<OpenMRSUser[]>([]);

  /** calls the prop.onChange with only the userId
   * @param {ValueType<Option>} option - the value in the react-select
   */
  const changeHandler = (option: ValueType<Option>) => {
    if (option !== null && option !== undefined && onChange) {
      onChange(option as Option);
    }
  };

  /** Pulls all openMRS users info and puts in store */
  const loadOpenMRSUsers = async (service: typeof OpenSRPService = OpenSRPService) => {
    const currentUserIndex = 0;
    let filterParams = {
      page_size: OPENMRS_USERS_REQUEST_PAGE_SIZE,
      start_index: currentUserIndex,
    };
    const serve = new service('user');
    let responseSize: number = 100;
    const allOpenMRSUsers = [];

    /**while any request returns the maximum request size:.
     * assume there is more data and make another request,
     * else know we just got the last page and stop making further requests
     */
    while (responseSize === OPENMRS_USERS_REQUEST_PAGE_SIZE) {
      const userData = await serve.list(filterParams);
      responseSize = userData.results.length;
      filterParams = {
        ...filterParams,
        start_index: filterParams.start_index + responseSize,
      };
      allOpenMRSUsers.push(...userData.results);
    }
    setOpenMRSUsers([...allOpenMRSUsers]);
  };

  useEffect(() => {
    loadOpenMRSUsers();
  }, []);

  const options = openMRSUsers.map((user: any) => ({ label: user.display, value: user.uuid }));

  return (
    <Select
      cacheOptions={true}
      defaultOptions={true}
      options={options}
      onChange={changeHandler}
      isSearchable={true}
    />
  );
};
UserIdSelect.defaultProps = defaultProps;
export default UserIdSelect;
