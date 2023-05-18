const jwt = require('jsonwebtoken');

const user = {
    id: "20",
    name: "Joao",
    username: "joaa@gmail.com",
    password: "1234567"
}

const secret = "dladbfbasdkfbalsbfSADFLABFLJGAVL"

function createToken(){
    const token = jwt.sign({id:user.id , username:user.username} , secret , {expiresIn: 60})
    console.log(token);
}

function testToken(token){
    try{
        const validData = jwt.verify(token , secret)
        console.log(validData)
    } catch (err){
        console.log(err)
    }
}



testToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FhQGdtYWlsLmNvbSIsImlhdCI6MTY4NDM1MTAxOSwiZXhwIjoxNjg0MzUxMDc5fQ.hyeXZL1qIoIfJAyuruB1nVo8LjyTj85k0FPN9JiwOb8")