const bcrypt = require('bcrypt')


exports.hashPassword = (Password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(Password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};


exports.comparePassword = (Password, hashed) =>{
 return bcrypt.compare(Password, hashed);
}