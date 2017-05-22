var Prompt = require('prompt-password');
var prompt = new Prompt({
  message: 'Enter your password',
  name: 'password',
  mask: require('./')
});

prompt.run()
  .then(function(answer) {
    console.log({password: answer});
  });
