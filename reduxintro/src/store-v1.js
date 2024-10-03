import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdrow":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReduser(state = initialStateCustomer, action) {
  switch (action.type) {
    case "custumer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: accountReducer,
  custumer: customerReduser,
});

const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });

// console.log(store.getState());

// store.dispatch({ type: "account/withdrow", payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 1000,
//     purpose: "buy car",
//   },
// });
// console.log(store.getState());

// const = ACCOUNT_DEPOSIT

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdrow(amount) {
  return { type: "account/withdrow", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

function payLoan(amount) {
  return { type: "account/payLoan", payload: amount };
}

store.dispatch(deposit(500));
store.dispatch(payLoan(500));
store.dispatch(withdrow(500));
store.dispatch(requestLoan(500, "buy a car"));

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toDateString() },
  };
}

function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}

store.dispatch(createCustomer("Olga Skrypets", "87890"));
console.log(store.getState());

store.dispatch(updateName("Olha Skrypets"));
