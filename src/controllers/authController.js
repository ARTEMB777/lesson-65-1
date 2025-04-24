const users = [];

exports.register = (req, res) => {
  const { email, password } = req.body;
  const userExists = users.some(u => u.email === email);
  if (userExists) {
    return res.status(400).send('User already exists');
  }
  users.push({ email, password });
  res.redirect('/login');
};

exports.login = (req, res) => {
  res.redirect('/protected');
};

exports.logout = (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).send('Error logging out');
    res.redirect('/');
  });
};