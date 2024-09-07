const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient({
    omit: {
        account: {
            account_password: true
        }
    }
}).$extends({
    name: 'Salt and hash',
    query: {
        account: {
            async $allOperations({ operation, args, query }) {
                if (['create', 'update'].includes(operation) && args.data['account_password']) {
                    args.data['account_password'] = bcrypt.hashSync(args.data['account_password'])
                }
                if (['upsert'].includes(operation) && args.create['account_password']) {
                    args.create['account_password'] = bcrypt.hashSync(args.create['account_password'])
                }
                return query(args)
            }
        }
    }
})
module.exports = prisma;