import { StyleSheet } from 'react-native';

export const JoinStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  iconsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
  },
  titleTextGroup: {
    marginTop: 20,
  },
  titleText: {
    fontWeight: '700',
    fontSize: 39,
    color: '#000',
  },
  subText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#7E7B7B',
    marginTop: 5,
  },
  formGroup: {
    marginTop: 44,
    rowGap: 10,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: '400',
    color: '#7B7B7B',
    marginBottom: 7,
  },
  formControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  formPasswordControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10,
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
  },
  signupButton: {
    backgroundColor: '#000',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  orDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E9E9E9',
  },
  orText: {
    marginHorizontal: 10,
    color: '#7B7B7B',
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E9E9E9',
    marginBottom: 15,
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#7B7B7B',
  },
  loginLink: {
    color: '#000',
    fontWeight: '600',
  },
  signupgroup: {
    marginTop: 'auto',
    marginBottom: 30,
  },
});

export default JoinStyles;
