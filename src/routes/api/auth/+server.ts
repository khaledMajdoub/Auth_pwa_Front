


export const GET = async () => {
    const apiUrl = 'http://localhost:8080/Allusers';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data from the server: ${response.statusText}`);
        }

        const data = await response.json();

        return data;
    } catch (error: any) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};