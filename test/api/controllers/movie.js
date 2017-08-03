const should = require('should'),
request = require('supertest'),
server = require('../../../app');

describe('controllers', function(){

  describe('movie',function(){

    describe('GET /getAll', function(){
      it('should return empty array of movies', function(done){
        request(server)
          .get('/movie')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err,res){
            should.not.exist(err);

            res.body.should.eql({movies: []});
            done();
          });
      });
    });
  });
});
