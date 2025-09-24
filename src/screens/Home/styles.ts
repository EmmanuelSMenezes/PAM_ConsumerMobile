import { theme } from './../../styles/theme';
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    paddingTop: 24,
  },

  subtitleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },

  subtitle: {
    color: theme.colors.black,
    fontSize: 18,
    fontFamily: theme.fonts.medium,
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 12,
  },

  seeMoreButton: {
    color: theme.colors.primary,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
  },

  itemsList: {
    marginBottom: 16,
    paddingLeft: 20,
  },

  itemsListContent: {
    paddingRight: 32
  },

  cardSize: {
    width: Dimensions.get('screen').width / 1.9,
    marginRight: 8
  },

  storeCardSize: {
    width: Dimensions.get("screen").width / 1.8,
    marginRight: 8
  },

  headerAddressContainer: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerAddressContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  headerAddressText: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
    lineHeight: 17
  }

});
