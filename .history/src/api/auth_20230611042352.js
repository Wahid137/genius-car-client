export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }

    //get jwt token 
    fetch('https://genius-car-server-jet-nine.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
}