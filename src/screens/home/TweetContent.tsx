import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native'

import { Tweet, Author } from './data-mock'

const tweetActions = (
  retweets: React.ReactNode,
  comments: React.ReactNode,
  likes: React.ReactNode,
) => {
  return (
    <View style={[styles.rowActions, styles.actionBar]}>
      <View style={styles.elemAction}>
        <Image
          style={styles.actionButton}
          source={require('../../../assets/icons/comment.png')}
        />
        <Text style={styles.actionText}>{comments}</Text>
      </View>
      <View style={styles.elemAction}>
        <Image
          style={styles.actionButton}
          source={require('../../../assets/icons/retweet.png')}
        />
        <Text style={styles.actionText}>{retweets}</Text>
      </View>
      <View style={styles.elemAction}>
        <Image
          style={styles.actionButton}
          source={require('../../../assets/icons/like.png')}
        />
        <Text style={styles.actionText}>{likes}</Text>
      </View>
      <Image
        style={styles.actionButton}
        source={require('../../../assets/icons/share.png')}
      />
    </View>
  )
}

const avatar = (author: Author) => {
  const imageUrl = author.avatar.replace('_normal', '')
  return <Image style={styles.avatar} source={{ uri: imageUrl }} />
}
interface GrayTextProps {
  children: React.ReactNode
  numberOfLines?: number
  style?: ViewStyle
}

const GrayText = ({ children, numberOfLines, style }: GrayTextProps) => {
  return (
    <Text
      style={[style as TextStyle, styles.gray]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  )
}

const TweetContent = ({ tweet }: { tweet: Tweet }) => {
  return (
    <View style={styles.singleItem}>
      <View style={styles.row}>
        {/* <ExpoImage
          style={styles.avatar}
          source={tweet.author.avatar}
          placeholder={{ blurhash: 'L3G4567ay~Wofl%M{0t7t7Rof0ayof' }}
          contentFit="cover"
          transition={1000}
        /> */}
        {avatar(tweet.author)}
        <View style={styles.tweetContentContainer}>
          <View style={styles.rowTop}>
            <Text numberOfLines={1} style={styles.header}>
              {tweet.author.name}
            </Text>
            <GrayText style={styles.author} numberOfLines={1}>
              @{tweet.author.screenName}
            </GrayText>
            <GrayText>·</GrayText>
            <GrayText>2h</GrayText>
          </View>
          <Text style={styles.description}>{tweet.fullText}</Text>
          <View style={styles.rowActions}>
            {tweetActions(
              tweet.retweetCount,
              tweet.replyCount,
              tweet.favoriteCount,
            )}
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  author: {
    flexShrink: 1,
  },
  actionBar: {
    marginTop: 8,
    justifyContent: 'space-between',
    marginRight: 16,
  },
  actionButton: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  gray: {
    color: '#777',
    fontSize: 13,
    paddingRight: 2,
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
    marginRight: 16,
    flexShrink: 0,
    marginTop: 4,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 4,
    paddingRight: 4,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#000',
  },
  singleItem: {
    paddingHorizontal: 16,
    minHeight: 44,
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  rowTop: {
    flexDirection: 'row',
  },
  rowActions: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  elemAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  actionText: {
    fontSize: 12,
    color: '#444',
  },
  tweetContentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
})

export default TweetContent
