/* global app */
import del from 'del';

export default () => del(app.path.clean);
