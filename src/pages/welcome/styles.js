import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.secundary,
    borderRadius: 4,
    height: 44,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.small,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  error: {
    color: colors.error,
    fontSize: fonts.small,
    paddingBottom: 15,
    paddingTop: 5,
  },
  github: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderRadius: 4,
    fontSize: fonts.small,
    height: 44,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  welcomeDescription: {
    color: colors.white,
    fontSize: fonts.regular,
    lineHeight: 21,
    marginHorizontal: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  welcomeTitle: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },
});

export default styles;
