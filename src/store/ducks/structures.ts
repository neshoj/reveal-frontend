import { keyBy, values } from 'lodash';
import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
import { FeatureCollection, GeoJSON, UpdateType, wrapFeatureCollection } from '../../helpers/utils';

/** the reducer name */
export const reducerName = 'structures';

/** Interface for structure.geojson.properties for structure
 *  as received from the fetch request / superset
 */
export interface InitialProperties {
  uid: string;
  code: string;
  name: string;
  type: string;
  status: string;
  version: number;
  server_version: number;
  jurisdiction_id: string;
  geographic_level: number | null;
  effective_end_date: string | null;
  effective_start_date: string | null;
}

/** interface for structure.geojson for
 * structure as received from the fetch request / superset
 */
export type InitialStructureGeoJSON = GeoJSON;

/** interface for structure Object for
 * structure as received from the fetch request / superset
 */
export interface InitialStructure {
  geojson: InitialStructureGeoJSON;
  id: string;
  jurisdiction_id: string;
}

export type Structure = InitialStructure;

// actions
/** STRUCTURES_SET action type */
export const STRUCTURES_SET = 'reveal/reducer/structures/STRUCTURES_SET';

/** interface for setStructure action */
interface SetStructuresAction extends AnyAction {
  structuresById: { [key: string]: Structure };
  type: typeof STRUCTURES_SET;
}

/** Create type for Structure reducer actions */
export type StructureActionTypes = SetStructuresAction | AnyAction;

/** interface for Structure state */
interface StructureState {
  structuresById: { [key: string]: Structure };
}

/** immutable Structure state */
export type ImmutableStructureState = StructureState &
  SeamlessImmutable.ImmutableObject<StructureState>;

/** initial Structure state */
const initialState: ImmutableStructureState = SeamlessImmutable({
  structuresById: {},
});

/** the Structure reducer function */
export default function reducer(
  state = initialState,
  action: StructureActionTypes
): ImmutableStructureState {
  switch (action.type) {
    case STRUCTURES_SET:
      if (action.structuresById) {
        return SeamlessImmutable({
          ...state,
          structuresById: action.structuresById,
        });
      }
      return state;
    default:
      return state;
  }
}

// action creators

/** set Structure creator
 * @param {Structure[]} structuresList - array of structure objects
 */
export const setStructures = (structuresList: InitialStructure[] = []): SetStructuresAction => {
  return {
    structuresById: keyBy(
      structuresList.map(
        (structure: InitialStructure): Structure => {
          /** ensure geojson is parsed */
          if (typeof structure.geojson === 'string') {
            structure.geojson = JSON.parse(structure.geojson);
          }
          /** ensure geometry is parsed */
          if (typeof structure.geojson.geometry === 'string') {
            structure.geojson.geometry = JSON.parse(structure.geojson.geometry);
          }
          return structure as Structure;
        }
      ),
      structure => structure.id
    ),
    type: STRUCTURES_SET,
  };
};

// selectors

/** get an array of structure objects
 * @param {Partial<Store>} state - the redux store
 * @returns {Structure[]} an array of structures
 */
export function getStructuresArray(state: Partial<Store>): Structure[] {
  return values((state as any)[reducerName].structuresById);
}

/** get Structures FeatureCollection
 * Structures are tasks whose geometry is of type Polygon
 * @param {Partial<Store>} state - the redux store
 * @returns {FeatureCollection} - a geoJSON Feature Collection object
 */
export function getStructuresFC(state: Partial<Store>): FeatureCollection<InitialStructureGeoJSON> {
  return wrapFeatureCollection(
    values(getStructuresArray(state).map((eachStructure: Structure) => eachStructure.geojson))
  );
}
