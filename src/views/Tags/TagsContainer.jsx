import React, { useEffect, useState } from 'react'
import Tags from './Tags'
import { getTags, clearTags } from '../../store/actions/tag.actions'
import { connect } from 'react-redux'
import { func, array } from 'prop-types'
import { createTagAlone } from "../../store/actions/tag.actions";

const TagsContainer = props => {
  const {getTags, clearTags, tags, createTagAlone} = props
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
      createTagAlone={createTagAlone}
    />
  )
}

const mapStateToProps = ({tags}) => ({
  tags: tags.tags
})

TagsContainer.defaultProps = {
  getTags: () => {},
  clearTags: () => {},
  createTagAlone: () => {},
  tags: []
}

TagsContainer.propTypes = {
  getTags: func,
  clearTags: func,
  tags: array,
  createTagAlone: func
}

export default connect(mapStateToProps, {getTags, clearTags, createTagAlone}) (TagsContainer)
