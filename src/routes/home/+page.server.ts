export function load({ cookies }) {
	 try {
	
	const visited = cookies.get('visited');

	cookies.set('visited', 'true', { path: '/home' });
	return {
		visited
	};
	 } catch (error) {
    console.error('Error in load function:', error);
    return {
      error: 'An error occurred while loading data.'
    };
  }
	
	
}

export const csr = false;
