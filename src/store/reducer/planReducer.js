const initialState = {
  plan: [
    {
      planName: "Basic plan",
      duration: 1,
      price: 1000,
      features: ["10 sessions", "access to 24/7 support", "membership fee"],
      benefits: [
        "unlimited sessions",
        "free access to 24/7 support",
        "membership fee",
      ],
      paymentType: "monthly",
      subscriptionType: "yearly",
    },
    {
      planName: "Premium plan",
      duration: 3,
      price: 3000,
      features: [
        "15 sessions",
        "access to 24/7 support",
        "membership fee",
        "access to exclusive gym facilities",
      ],
      benefits: [
        "unlimited sessions",
        "free access to 24/7 support",
        "membership fee",
        "access to exclusive gym facilities",
      ],
      paymentType: "monthly",
      subscriptionType: "yearly",
    },
  ],
  selectedPlan: {},
};

export const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_PLAN":
      return {
        ...state,
        selectedPlan: action.payload,
      };

    case "CLEAR_SELECTED_PLAN":
      return {
        ...state,
        selectedPlan: {},
      };

    default:
      return state;
  }
};
