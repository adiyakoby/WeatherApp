type hourTemp = {
    hour: number;
    temp_c: number;
}


/**
 * Fetches data from a given URL.
 * 
 * @param url - The API endpoint URL to fetch data from.
 * @returns The parsed JSON data from the API response.
 * @throws Throws an error if the fetch operation fails or the response is not ok.
 */
export const FetchData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        
        if (response.ok) {
            return await response.json();
        } else {
            const {error} = await response.json();
            throw error;
        }
    } catch (error) {
        console.log(`Error: Couldn't fetch data from url -> ${url}`)
        throw error
    }


};


/**
 * Extracts hourly temperature data based on the current local time.
 * 
 * Filters forecast data to get hourly temperature values within a 3-hour range
 * from the current local time. Returns a subset of hours starting from the second hour.
 * 
 * @param array - Array of forecast hour objects containing temperature data.
 * @param local_time - The current local time to calculate the range.
 * @param delta - The number of hours to include before and after the current hour (default is 3).
 * @returns An array of hourly temperature data objects, each containing hour and temperature.
 */
export const extractHours = (array: any[], local_time: string , delta: number = 3): hourTemp[] => {
    let current_hour: number = new Date(local_time).getHours();

    if (current_hour === 0) {
        current_hour += 1
    } else if (current_hour === 23){
        current_hour -= 1
    }

    const hours: { hour: number; temp_c: number; }[] = []

    array.forEach((hour: any) => {
        const curr_hour = new Date(hour.time).getHours();
        if (Math.abs(curr_hour - current_hour) <= 3) {
            hours.push({'hour': curr_hour, 'temp_c': hour.temp_c})
        }
    });

    return hours.splice(1, 5)
 
}

export default FetchData;