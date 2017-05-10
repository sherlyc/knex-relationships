module.exports = {
  getUser,
  getUsers,
  getProfiles,
  getProfile,
  addUser,
  addPost,
  getPosts
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

function addUser(data, connection){
  return connection('users')
    .insert({
              name: data.name,
              email: data.email
            })
    .then((user_id) => {
           return connection('profiles')
               .insert({user_id: user_id[0],
                        url: data.url,
                        picture: data.picture
               })
         })
}

function addPost(data, connection){
  return connection('posts')
    .insert({
              title: data.title,
              content: data.content,
              user_id: data.user_id
            })
}

function getPosts(connection){
  return connection('posts')
    .select('posts.id as id', 'title','name')
    .join('users', 'posts.user_id', '=' ,'users.id')
}

function getPost(id, connection){
  return connection('posts')
    .select('title', 'content', 'name')
    .where('posts.id', id)
    .join('users', 'posts.user_id', '=', 'users.id')

}
