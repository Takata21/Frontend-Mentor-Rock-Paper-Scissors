const computerPlayer = () => {
  const election = Math.ceil(Math.random() * 3);
  if (election === 1) {
    return "paper";
  } else if (election === 2) {
    return "scissors";
  } else if (election === 3) {
    return "rock";
  }
};

export default computerPlayer;
