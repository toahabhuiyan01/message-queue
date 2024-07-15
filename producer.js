const { Queue } = require('bullmq')

const notificationQueue = new Queue(
    'email-queue',
    {
        connection: {
            host: '127.0.0.1',
            port: 6379
        }
    }
)

async function init() {
    const res = await notificationQueue.add(
        'send-email',
        {
            email: 'toaha@mail.com',
            subject: 'Hello',
            message: 'Hello World'
        }
    )

    console.log('Email added to queue', res.id)
}

init()