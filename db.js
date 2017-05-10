module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfiles: getProfiles,
  getProfile: getProfile
}

function getUsers(connection) {
  return connection('users').select()
}

function getUser(id, connection) {
  return connection('users').where('id', id)
}

function getProfiles(connection) {
  return connection('profiles')
         .select('profiles.id as pid', 'url', 'name', 'users.id as uid')
         .join('users', 'profiles.user_id','=', 'users.id')
}

function getProfile(id, connection) {
  return connection('profiles')
        .select('name', 'email', 'url', 'picture')
        .where('user_id', id)
        .join('users', 'profiles.user_id', '=', 'users.id')
}
