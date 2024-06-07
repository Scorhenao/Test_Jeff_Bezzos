
export async function read(URL) {
    const data = await fetch(URL);
    return await data.json();
}

export async function create(URL, data){
    const response = await fetch(URL,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    return await response.json();
}