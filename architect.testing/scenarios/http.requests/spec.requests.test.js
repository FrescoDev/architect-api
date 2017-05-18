import * as chai from 'chai'
import server from '../../harness.setup/testing.server'

const expect = chai.expect

describe('Call to POST component spec at /spec endpoint', () => {
    describe('#200', () => {
        it('should return json', (done) => {
            server
                .post('/spec')
                .send({
                    'component': {
                        'id': 'uihm',
                        'name': 'user-inter-hyper-man',
                        'desc': 'user inter hyper man',
                        'type': 'ipc',
                        'routes': [],
                        'hasPersistenceModule': 'false',
                        'hasCachingModule': 'false',
                        'hasLoggingModule': 'false',
                        'canDocker': 'false'
                    }
                })
                .end((err, res) => {
                    expect(res)
                        .to
                        .have
                        .status(200)
                    expect(res.type)
                        .to
                        .eql('application/json')
                    done()
                })
        })
    })
})