import { callApi } from "../../utils"
import {CREATE_CAPTION} from '../../utils/constants'

export const createCaption = async (caption, tags, cb) => dispatch => {
  try {
    let res;
    if(Array.isArray(tags) && tags.length){
      res = await callApi('/caption/multi', {
        caption,
        tags
      }, 'POST')
      if(res){
        dispatch({
          type: CREATE_CAPTION,
          payload: capton
        })
      }
    } else {
      res = await callApi('/caption', {
        caption
      }, 'POST')
      if(res){
        dispatch({
          type: CREATE_CAPTION,
          payload: caption
        })
      }
    }
  } catch (error) {
    console.log(error)
  } finally{
    cb()
  }
}

export const getCaptions = async (cb) => dispatch => {
  try {
      const res = await callApi('/caption', null, 'GET')
      if(res && res.status === "success"){
        const {data: {captions}} = res
        dispatch({
          type: CREATE_CAPTION,
          payload: captions
        })
      }
  } catch (error) {
    console.log(error)
  }finally{
    cb()
  }
}