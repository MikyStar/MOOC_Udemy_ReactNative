import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserList extends Component
{
	render()
	{
		return (
				<div>

					<ul className="col-md-4">

						{
							this.props.myUsers.map( ( user ) =>
							{
								return (
										<li className='list-group-item' key={ user.id }>

											{ user.name }

										</li>
								);
							})
						}

					</ul>

				</div>
		);
	}
}

/**
 * It's my bridge between React and Redux thanks to the connect function in the export default
 *
 * It takes the state of the users and put it in the myUsers attribute of props
 */
function mapStateToProps( state )
{
	return {
		myUsers : state.users
	}
}

export default connect(mapStateToProps)(UserList);