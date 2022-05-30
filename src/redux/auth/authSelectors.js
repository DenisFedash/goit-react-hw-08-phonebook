const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getLoading = state => state.auth.isLoading;
const getIsRefreshing = state => state.auth.ssRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getLoading,
  getIsRefreshing,
};

export default authSelectors;
