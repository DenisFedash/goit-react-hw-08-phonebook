const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getLoading = state => state.auth.isLoading;
const getIsRefreshing = state => state.auth.ssRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getLoading,
  getIsRefreshing,
};

export default authSelectors;
