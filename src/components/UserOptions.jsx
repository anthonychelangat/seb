const UserOptions = ({ id }) => {
  switch (id) {
    case 1:
      return "Admin";
    case 2:
      return "Guide";
    case 3:
      return "Regular";
    default:
      return "Unspecified";
  }
};

export default UserOptions;
