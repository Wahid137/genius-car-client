export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }

    //get jwt token 
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
}