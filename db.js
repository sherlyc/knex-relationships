module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfiles: getProfiles
}

function getUsers(connection) {
  return connection('users').select()
}

function getUser(id, connection) {
  return connection('users').where('id', id)
}

function getProfiles(connection) {
  return connection('profiles')
         .select('profiles.id as pid', 'url', 'name')
         .join('users', 'profiles.user_id','=', 'users.id')
}
