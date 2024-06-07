/**Logic of CRUD
 * C -> Create : POST
 * R -> Read : GET
 * U -> Update : PUT/PATCH
 * D -> Delete : DELETE
 */

/**Get method to get the information of an enpoint */
export async function read(URL) {
    const data = await fetch(URL);
    return await data.json();
}

/**Post method to send new information throughout an enpoint
 * The info that gonna be save in the api json
 */
export async function create(URL,data) {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response.json();
}