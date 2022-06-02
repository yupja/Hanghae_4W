import {
    collection,
    doc,
    getDocs,
    addDoc,
    deleteDoc,
  } 
  from "firebase/firestore";
  import { async } from "@firebase/util";
  import { db } from "../../firebase";
  
  // Actions
  const LOAD = "main/LOAD";
  const CREATE = "main/CREATE";
  const DELETE = "main/DELETE";
//   const UPDATE = "main/UPDATE"
  
  const initialState = {
    list: [{word: "dldl", mean:"dldd", example:"dndndn"}],
  };
  
  // Action Creators
  export function loadMain(main_list) {
    return { type: LOAD, main_list };
  }
  
  export function createMain(main) {
    return { type: CREATE, main };
  }
  
  export function deleteMain(main_index) {
    return { type: DELETE, main_index };
  }

//   export const updateDictionary = (id) => {
//     return {
//       type: UPDATE, id,
//     };
//   };
  
  // middlewares
  export const loadMainFB = () => {
    return async function (dispatch) {
      const main_data = await getDocs(collection(db, "dic"));
      let main_list = [];
  
      main_data.forEach((m) => {
        main_list.push({ id: m.id, ...m.data() });
      });
      dispatch(loadMain(main_list));
    };
  };
  
  export const createMainFB = (main) => {
    return async function (dispatch) {
      const docRef = await addDoc(collection(db, "dic"), main);
      const main_data = { id: docRef.id, ...main };
      dispatch(createMain(main_data));
    };
  };
  
  export const deleteMainFB = (main_id) => {
    return async function (dispatch, getState) {
      console.log(main_id);
      const docRef = doc(db, "dic", main_id);
      await deleteDoc(docRef);
      const _main_list = getState().main.list;
      const main_index = _main_list.findIndex((b) => {
        return b.id === main_id;
      });
      dispatch(deleteMain(main_index));
    };
  };

//   export const updateBucketFB = (main, _id) => {
//     return async function (dispatch) {
//         const main_data = await getDocs(collection(db, "dic"));
//         let main_list = [];
    
//         dispatch((main_list));
//       };
//     };
  
  // Reducer
  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "main/LOAD": {
        return { list: action.main_list };
      }
  
      case "main/CREATE": {
        const new_main = [...state.list, action.main];
        return { list: new_main };
      }
  
      case "main/DELETE": {
        const new_main_list = state.list.filter((l, idx) => {
          return parseInt(action.main_index) !== idx;
        });
        return { list: new_main_list };
      }
      default:
        return state;
    }
  }
  