import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize:85,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 19,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  linkText: {
    color: '#007BFF',
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  iconButton: {
    marginHorizontal: 40,
  },
  separator: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    marginVertical: 10,
  },
  tiny_name: {
    width: '80%',
  },
});

export default styles;