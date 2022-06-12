const getSubmission = (req, res) => {
  res.sendFile('index.html');
};

const postSubmission = (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username === '' || password === '') {
    return res.status(401).send('Failed to post...');
  }
  res.send('Post successful...');
};

module.exports = { getSubmission, postSubmission };
