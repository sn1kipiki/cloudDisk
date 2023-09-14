import axios from 'axios'

export const registration = async (email, username, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
            email,
            username,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }

}