
const aws = {
    name: 'aws',
    codeSuccess: 'abcd',
    codeError: '1234',
    sendEmail: async ()=>{
        try {
            return
        } catch (error) {
            return aws.codeError
        }
    }
}
const twilio = {
    codeSuccess: 'bcde',
    codeError: '2345',
    name: 'twilio',
    sendEmail: async ()=>{
        try {
            
        } catch (error) {
            return aws.codeError
        }
    }
}

class Mailing{
    validateCodeErrors(code){
        let codeArrs = ['1234', '2345']
        if(codeArrs.includes(code))
            return false
        return true
    }
    async sendEmail(provider) {
        try {
           const code = await provider.sendEmail()
           const isValidOperation = this.validateCodeErrors(code)
           if(!isValidOperation)
            this.sendEmail(twilio)
        } catch (error) {
            throw error
        }
    }
}


const emailController = new Mailing()

emailController.sendEmail(aws)