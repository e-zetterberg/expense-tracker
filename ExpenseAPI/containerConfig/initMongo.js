/* global db */
db.createUser(
    {
        user: 'dbadmin',
        pwd: 'greatmindsthinkalike',
        roles: [
            {
                role: 'readWrite',
                db: 'transactions',
            }
        ],
    },
);