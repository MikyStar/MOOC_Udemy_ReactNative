/**
 * @description This is an action creator
 *
 * @argument libraryID 
 *
 * @returns An action -> 'type' attribute obligated
 */
export const selectLibrary = ( libraryID ) =>
{
	return {
		type : 'select-library',
		payload : libraryID
	}
}