import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Home from './Home'
import { getCaptions, getCaptionByTagId } from '../../store/actions/caption.actions';

const HomeContainer = props => {
  const [isLoading, setIsLoading] = useState(true);
  const {getCaptions, getCaptionByTagId, captions, activeTags} = props

  useEffect(() => {
    getCaptions(() => setIsLoading(true))
  }, [])

  const getSearchedCaptions = cb => {
    // Choose a random number from 1 to 10
    const randomId = Math.floor(Math.random() * 9) + 1
    getCaptionByTagId(randomId, cb)
  }

  return (
    <Home 
      isLoading={isLoading}
      captions={captions}
      activeTags={activeTags}
      getSearchedCaptions={getSearchedCaptions}
    />
  )
}

const mapStateToProps = state => ({
  captions: state.captions.captions,
  activeTags: state.tags.activeTags
})

export default connect(mapStateToProps, {getCaptions, getCaptionByTagId})(HomeContainer)
