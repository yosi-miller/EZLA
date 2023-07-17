## Development

This is a monorepo using npm workspaces

### Start client
```
npm run start -w client
```

### Start backend
```
npm run start -w backend
```

### Start backend mock server
```
npm run start -w backend-mock
```
This will start a mock server on localhost:8080 with some random data.

Check http://localhost:8080/rides for example

### Generating open api typescript client
```
npm run generate:api:client -w client
```