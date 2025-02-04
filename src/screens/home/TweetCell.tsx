import React from 'react'
import { Pressable } from 'react-native'
import TweetContent from './TweetContent'
import { Tweet } from './data-mock'

const TweetCell = ({ tweet }: { tweet: Tweet }) => {
  return (
    <Pressable onPress={() => {}}>
      <TweetContent tweet={tweet} />
    </Pressable>
  )
}

export default TweetCell
