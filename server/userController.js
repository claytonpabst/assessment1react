var app = require('./index.js');
var db = app.get('db');

module.exports = {
  getUserInfo: function(req, res){
      console.log("get user info running");
    db.find_by_id([req.session.passport.user.google_id],function(err,user){
      if (err){
        res.status(400).json(err);
      }else if (user[0]){
        res.status(200).json(user[0]);
      }else if (user){
        res.status(200).json(user);
      }
    });
  },
    
  findById: function(accessToken,refreshToken,profile, done){
      db.find_by_id([profile.id],function(err,user){

          if(!user[0]){//if there isnt one, create!!
            console.log('CREATING USER');
            console.log('profile');
            db.create_google_user([profile.id,profile.name.familyName, profile.name.givenName, accessToken],function(err,user){
              console.log('USER CREATED',user);
              return done(err,user);//goes to serialize user
            })
          }else{//if we find a user, return it
            console.log('FOUND USER', user)
            return done(err,user);
          }

      })

  }
  
};
