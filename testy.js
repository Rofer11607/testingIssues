const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getAllUsers() {
  return users.slice(0, 5);
}

// Should return all users however only returning the first 5
const allUsers = getAllUsers();
