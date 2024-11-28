type hourTemp = {
    hour: number;
    temp_c: number;
}

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


export const extractHours = (array: any[], local_time: string , delta:number = 3): hourTemp[] => {
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