import axios from 'axios'

import { ActionType_POST } from './action-types';

const END_POINT = "http://localhost:3000"

export function readAllPosts()
{
	return function ( dispatch )
	{
		axios.get( `${ END_POINT }/posts` ).then(
			( response ) =>
			{
				dispatch(
				{
					type : ActionType_POST.READ_ALL,
					payload : response.data
				})
			}
		)
	}
}

export function readPosts( id )
{
	return function ( dispatch )
	{
		axios.get( `${END_POINT}/posts/${ id }` ).then(
			( response ) =>
			{
				dispatch(
				{
					type : ActionType_POST.READ,
					payload : response.data
				})
			}
		)
	}
}

export function deletePost( id )
{
	return function ( dispatch )
	{
		axios.delete( `${END_POINT}/posts/${ id }` ).then(
			( response ) =>
			{
				dispatch(
				{
					type : ActionType_POST.DELETE,
					payload : id
				})
			}
		)
	}
}

export function createPost( post )
{
	return function ( dispatch )
	{
		axios.post( `${END_POINT}/posts`,
		{ // It's the body
			title : post.title,
			content : post.content,
			author : post.author
		})
		.then(
		( response ) =>
		{
			dispatch(
			{
				type : ActionType_POST.CREATE,
				payload : response.data
			})
		}
		)
	}
}