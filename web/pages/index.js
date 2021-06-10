import client from '../client'
// import groq from 'groq'

function index({ a }) {
    // [_id == "page" && ]
    const query = `*[_type == "pages" && title == "Home page"]`
    // const params = {minSeats: 2}
    
    client.fetch(query).then((bikes) => {
        console.log(bikes
        )
    })

    
    return (
        <div>
            Home page
        </div>
    )
}

export default index;