module.exports = {
    // takes the request from the http request, the response object, message to client, info about the actual error
    // returns it back to the client
    error: function(req, res, msg, info){
        res.json({error: true, req_payload: req.body, message: msg, info: info})
    }
}