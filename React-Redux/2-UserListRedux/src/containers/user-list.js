import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'

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
										<li
											className='list-group-item'
											key={ user.id }
											onClick={ () => this.props.selectUser( user ) }
										>

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

/**
 * The goal here to take the action from the action creator but not to treat it, to give to ALL reducers
 * to trigger the ones who needs to do something
 * Thanks to this function, I can access selectUser inside props.
 * So now basically, when I call this.props.selectUser now, it will dispatch the action to every reducers to change the state
 */
function mapDispatchToProps( dispatch )
{
	return bindActionCreators( { selectUser : selectUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);