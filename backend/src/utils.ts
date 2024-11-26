

const FetchData = async (url: string) => {
    console.log("inside fetch data");
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("error fetching data.");
        }
    } catch (error) {
        console.log(`Error: Couldn't fetch data from url -> ${url}`)
        console.log(error);
        return null;
    }


};


export default FetchData;