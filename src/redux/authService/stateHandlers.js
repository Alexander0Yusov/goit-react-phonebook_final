export const pendingHandler = state => {
  state.isLoading = true;
};

export const rejectedHandler = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  console.log(payload);
};

export const loginFulfilledHandler = (state, { payload }) => {
  state.token = payload.token;
  state.isLoading = false;
  state.error = null;
  state.user = payload.user;
  console.log(payload);
};

export const logoutFulfilledHandler = state => {
  state.token = '';
  state.isLoading = false;
  state.error = null;
  state.user = null;
};

export const getUserFulfilledHandler = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.user = payload;
  console.log('payload user ', payload);
};
