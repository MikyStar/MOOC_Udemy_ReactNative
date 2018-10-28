import datas from './library-list.json';

/**
 * At the very beggining, when the App boots up, a signal is going to be sent through the index.js of reducers to ask every reducer to act
 * So this one is going to be called, triggered, so we can have the datas inside the attribute libraries of the global state
 */
export default () => datas;