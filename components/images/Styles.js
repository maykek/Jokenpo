import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    alingItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  top: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#BF1584',
    fontSize: 60,
  },
  button: {
    borderStartWidth: 2,
    borderEndWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: '#C82187',
    color: '#C82187',
    margin: 1,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  b_user: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    margin: 5,
    width: 150,
    height: 150,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#BF1584',
  },
  res: {
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#BF1584',
    fontSize: 24,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});