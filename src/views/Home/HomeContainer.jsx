import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Home from './Home'
import { getCaptions } from '../../store/actions/caption.actions';

const HomeContainer = props => {
  const [isLoading, setIsLoading] = useState(true);
  const {getCaptions, captions} = props

  useEffect(() => {
    getCaptions(() => setIsLoading(true))
  }, [])

  return (
    <Home 
      isLoading={isLoading}
      captions={captions}
    />
  )
}

const mapStateToProps = state => ({
  captions: state.captions.captions,
  
})

export default connect(mapStateToProps, {getCaptions})(HomeContainer)
