import { callApi } from "../../utils";
import { CREATE_CAPTION, GET_TAGS, CLEAR_ACTIVE_TAGS } from "../../utils/constants";

export const createTags = (caption, tags, cb) => async dispatch => {
  try {
    let res;
    if (Array.isArray(tags) && tags.length) {
      res = await callApi(
        "/caption/multi",
        {
          caption,
          tags
        },
        "POST"
      );
      if (res) {
        dispatch({
          type: CREATE_CAPTION,
          payload: caption
        });
      }
    } else {
      res = await callApi(
        "/caption",
        {
          caption
        },
        "POST"
      );
      if (res) {
        dispatch({
          type: CREATE_CAPTION,
          payload: caption
        });
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    cb();
  }
};

export const getTags = cb => async dispatch => {
  try {
    const res = await callApi("/tag", null, "GET");

    if (res && res.status === "success") {
      const {
        data: { tags }
      } = res;
      dispatch({
        type: GET_TAGS,
        payload: tags
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    cb();
  }
};

export const clearActiveTags = () => dispatch => dispatch({
  type: CLEAR_ACTIVE_TAGS
});
