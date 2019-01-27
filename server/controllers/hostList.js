module.exports = (app) => {
    const hosts = {};
    
    hosts.list = (context, next) => {
        app.get('/hosts', (request, response)=>{
            response.send(context.hostsList)
        });
    }

    return hosts;

}