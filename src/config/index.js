import login from '../router/login'
import factory from '../router/factory'

export default (app) => {
    app.post('/login', login);
    app.get('/factory', factory);
}