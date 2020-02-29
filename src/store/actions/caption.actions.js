import { callApi } from "../../utils"
import {CREATE_CAPTION, GET_CAPTIONS} from '../../utils/constants'

export const createCaption = (caption, tags, cb) => async dispatch => {
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
          payload: caption
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

export const getCaptions =  cb => async dispatch => {
  try {
      const res = await callApi('/caption', null, 'GET')
      
      if(res && res.status === "success"){
        const {data: {captions}} = res
        console.log(captions)
        dispatch({
          type: GET_CAPTIONS,
          payload: captions
        })
      }
  } catch (error) {
    console.log(error)
  }finally{
    cb()
  }
}