export default function handler(req, res) {
    // Get data submitted in request's body.
    const data = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('data: ', data)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!data.first || !data.last) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'First or last name not found' })
    }
  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${data.first} ${data.last}` })
  }