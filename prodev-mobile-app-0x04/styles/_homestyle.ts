import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchGroup: {
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchControlGroup: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchFormText: {
    fontSize: 16,
    color: '#6c757d',
  },
  searchControl: {
    height: 24,
    padding: 0,
    marginTop: 4,
  },
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#34967C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    height: 72,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  filterGroup: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  filterImage: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  filterText: {
    fontSize: 12,
    color: '#495057',
  },
  listingContainer: {
    flex: 1,
    padding: 16,
  },
  paginationContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  showMoreButton: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  showMoreButtonText: {
    color: '#495057',
    fontWeight: '600',
  },
});
