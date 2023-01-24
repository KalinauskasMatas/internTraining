import Profile from "../Profile";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice from "../../../redux/features/currentUser/currentUserSlice";

import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
  },
});

it("renders without crash", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </Provider>
  );
});

it("matches with snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
