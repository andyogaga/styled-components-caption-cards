/* eslint-disable no-undef */
import {
  wait,
  cleanup
} from "@testing-library/react";
import moxios from "moxios";
import { createMemoryHistory } from "history";
import React from "react";
import Tags from "../TagsContainer";
import { renderWithReduxAndRouter, mockStore } from "../../../utils/testUtils";
const mockGetTags = jest.fn().mockName("getTags");
const mockClearTags = jest.fn().mockName("clearTags");
const mockCreateTagAlone = jest.fn().mockName("createTagAlone");

describe("Tags Tests", () => {
  let store;
  afterEach(() => {
    cleanup();
    moxios.uninstall();
  });
  beforeEach(() => {
    store = mockStore({
      tags: {
        tags: ['food']
      }
    });
    moxios.install();
  });
  let history = createMemoryHistory({
    initialEntries: ["/tags"]
  });
  it("should load the document to the DOM with an input form", () => {
    const { queryByPlaceholderText } = renderWithReduxAndRouter(
      <Tags
        getTags={mockGetTags}
        clearTags={mockClearTags}
        createTagAlone={mockCreateTagAlone}
      />,
      {
        route: "/tags",
        initialState: {},
        history: history,
        store
      }
    );
    const searchInput = queryByPlaceholderText("Enter Tags to Add");
    expect(searchInput).not.toBeNull();
  });

  it("should display the nav bar after loading", async () => {
    const { queryAllByText } = renderWithReduxAndRouter(
      <Tags
        getTags={mockGetTags}
        clearTags={mockClearTags}
        createTagAlone={mockCreateTagAlone}
      />,
      {
        route: "/tags",
        initialState: {},
        history: history,
        store
      }
    );
    const homeMenuButton = queryAllByText("Home");
    const captionsMenuButton = queryAllByText("Captions");
    const tagsMenuButton = queryAllByText("Tags");

    await wait(() => {
      expect(homeMenuButton).not.toBeNull;
      expect(captionsMenuButton).not.toBeNull;
      expect(tagsMenuButton).not.toBeNull;
    });
  });

  it("should display text when searched tags are empty", () => {
    const { queryByText } = renderWithReduxAndRouter(
      <Tags
        getTags={mockGetTags}
        clearTags={mockClearTags}
        createTagAlone={mockCreateTagAlone}
      />,
      {
        route: "/tags",
        initialState: {},
        history: history,
        store
      }
    );
    const emptyError = queryByText("Please Search Above");
    expect(emptyError).not.toBeNull;
  });

});
