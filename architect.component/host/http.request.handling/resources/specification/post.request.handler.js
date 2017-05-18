import BaseHandler from 'fresco-http-service-utilities';
import factory from '../../../../core/factory'


class PostSpecHandler extends BaseHandler {
    handle(req, res) {
        factory.buildLintFile();

        res.json({
            description: 'architect',
            health: 'ok'
        });
    }
}

export default new PostSpecHandler();