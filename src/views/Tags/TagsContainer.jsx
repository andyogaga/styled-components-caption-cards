import React, { useEffect, useState } from 'react'
import Tags from './Tags'
import { getTags, clearTags } from '../../store/actions/tag.actions'
import { connect } from 'react-redux'
import { func, shape, string } from 'prop-types'

const TagsContainer = props => {
  const {getTags, clearTags, tags} = props
  const [tagsLoading, setTagsLoading] = useState(true)
  useEffect(() => {
    getTags(() => setTagsLoading(false))
    return () => {
      clearTags()
    };
  }, [])
  return (
    <Tags 
      tags={tags}
      tagsLoading={tagsLoading}
    />
  )
}

const mapStateToProps = ({tags}) => ({
  tags: tags.tags
})

TagsContainer.defaultProps = {
  getTags: () => {},
  clearTags: () => {},
  tags: []
}

TagsContainer.propTypes = {
  getTags: func,
  clearTags: func,
  tags: shape([string])
}

export default connect(mapStateToProps, {getTags, clearTags}) (TagsContainer)
