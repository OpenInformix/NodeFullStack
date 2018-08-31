// var dbobj = require('ifxnjs');

class IfxProductService
{
    // if you need block scope thn declare with 'let' or 'const' else 'var'
    constructor()
    {
        this.Conn  = undefined;
        this.ConnErr  = undefined;
        this.ConStr = "SERVER=ids0;DATABASE=db1;HOST=192.168.56.5;SERVICE=5550;UID=informix;PWD=xxxx;"
    }

    DbConnect( msg )
    {
        if( msg == undefined)
        {
            msg = "";
        }

        if( this.Conn == undefined)
        {
            this.Conn = "Connected";
            console.log( "DbConnect: Success " + msg );
        }
        else
        {
            console.log( "DbConnect: Already opened " + msg );
        }
    }

    DbClose( msg )
    {
        if( this.Conn == undefined)
        {
            this.Conn = "closed";
            console.log( "DbClose: " + msg );
            this.Conn = undefined;
        }
    }

    ////////////////////////////////////////////////////////////////////
    PostReq( id, ReqBody )
    {
        console.log( "PostReq: Success for id=" + id );
    }

}

module.exports = new IfxProductService();


