const { Worker } = require('bullmq')

const sendEmail = () => new Promise((res) => setTimeout(res, 5 * 1000))

const worker = new Worker(
    'email-queue',
    async job => {
        console.log('Processing email', job.id)
        console.log('Sending Email to', job.data.email)
        
        await sendEmail()

        console.log('Email sent')
    },
    {
        connection: {
            host: '127.0.0.1',
            port: 6379
        }
    }
)