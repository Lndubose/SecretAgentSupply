export const ADD_TARGET = 'ADD_TARGET';

export const addTarget = target => {
  return ({type: ADD_TARGET, payload: target})
}