class ApiError extends Error {
    constructor(
        statusCode,
        message="Someting Went Wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        // There will be no additional data with the error, or you may want no data to be sent with the error.
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors

        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export default ApiError