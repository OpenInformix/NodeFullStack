var dbobj = require('ifxnjs');
var fs = require('fs');

class IfxProductService {
    // if you need block scope thn declare with 'let' or 'const' else 'var'
    constructor() {
        this.Conn = undefined;
        this.ConnErr = undefined;
        this.ConnStr = undefined;
    }

    DbConnect() {
        if (this.Conn == undefined) {

            // Get the connection string
            if (this.ConnStr == undefined) {
                try {
                    // See the SampleConnInfo.json to create ConnInfo.json
                    var ConnInfo = JSON.parse(fs.readFileSync('ConnInfo.json', 'utf8')); // do Synchronously read only

                    // this.ConnStr = "SERVER=ids0;DATABASE=db1;HOST=192.168.56.5;SERVICE=5550;UID=informix;PWD=xxxxx;"
                    this.ConnStr = ConnInfo.AllConns.Conn1.ConnStr;

                    console.log("Connection String used for connection to Informix Server is ");
                    console.log(this.ConnStr);
                    console.log();
                }
                catch (e) {
                    this.ConnStr = undefined;
                    console.log(e);
                    return (false);
                }
            }


            try {
                // Open the connection
                this.Conn = dbobj.openSync(this.ConnStr);
            }
            catch (e) {
                this.Conn = undefined;
                console.log(e);
                return (false);
            }

            console.log("DbConnect: Success ");
        }
        else {
            console.log("DbConnect: Already opened ");
        }
        return (true);
    }

    DbClose() {
        if (this.Conn == undefined) {
            this.Conn = "closed";
            console.log("DbClose: ");
            this.Conn = undefined;
        }
    }

    ////////////////////////////////////////////////////////////////////
    GetReq(ReqBody) {
        this.DbConnect();
        console.log("GetReq (no ID)" );
        return ({ "id": 0 });
    }

    GetIdReq(id) {
        console.log("GetIdReq id=" + id);
        return ({ "id": 0 });
    }

    PostReq(id, ReqBody) {
        console.log("PostReq: Success for id=" + id);
    }

    DelReq(id) {
        console.log("DelReq id=" + id);
        return (true);
    }

}

module.exports = new IfxProductService();


