var dbobj = require('ifxnjs');

class IfxProductService
{
    // if you need block scope thn declare with 'let' or 'const' else 'var'
    constructor()
    {
        this.Conn = undefined;
        this.ConnErr = undefined;
        this.ConStr = "SERVER=ids0;DATABASE=db1;HOST=192.168.56.5;SERVICE=5550;UID=informix;PWD=xxxxx;"

    }

    DbConnect()
    {
        if (this.Conn == undefined)
        {
            try
            {
                this.Conn = dbobj.openSync(this.ConStr);
            }
            catch (e) {
                this.Conn = undefined;
                console.log(e);
                return (false);
            }

            this.Conn = "Connected";
            console.log("DbConnect: Success " );
        }
        else
        {
            console.log("DbConnect: Already opened ");
        }
        return(true);
    }

    DbClose()
    {
        if (this.Conn == undefined)
        {
            this.Conn = "closed";
            console.log("DbClose: " );
            this.Conn = undefined;
        }
    }

    ////////////////////////////////////////////////////////////////////
    GetReq(ReqBody)
    {
        this.DbConnect();
        console.log("GetReq id=" + id);
        return ( {"id": 0 }  );
    }

    GetIdReq(id)
    {
        console.log("GetIdReq id=" + id);
        return ( {"id": 0 } );
    }

    PostReq(id, ReqBody)
    {
        console.log("PostReq: Success for id=" + id);
    }

    DelReq(id)
    {
        console.log("DelReq id=" + id);
        return(true);
    }

}

module.exports = new IfxProductService();


