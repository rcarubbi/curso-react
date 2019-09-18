using CoursesAPI.Domain.Entities;
using CoursesAPI.Domain.Repositories;
using CoursesAPI.Domain.ValueObjects;
using CoursesAPI.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace CoursesAPI.Controllers
{
    public class AuthorController : ApiController
    {
        
        private IAuthorRepository _authorRepository;

        public AuthorController(IAuthorRepository authorRepository)
        {
           
            _authorRepository = authorRepository;
        }
        // GET api/values
        public async Task<IEnumerable<Author>> Get()
        {
            return await _authorRepository.GetAuthorsAsync();
        }

        // GET api/values/5
        public async Task<Author> Get(Guid id)
        {
            return await _authorRepository.GetAuthorByIdAsync(id);
        }

        // POST api/values
        public async Task<IHttpActionResult> Post(AuthorViewModel viewModel)
        {
           
            var newAuthor = new Author(
                new Name(
                    viewModel.FirstName,
                    viewModel.LastName
                )
            );

            await _authorRepository.AddAuthorAsync(newAuthor);
            return Created($"{Request.RequestUri}/{newAuthor.Id}", newAuthor);
        }

        // PUT api/values/5
        public async Task<IHttpActionResult> Put(Guid id, AuthorViewModel viewModel)
        {
            var currentAuthor = await _authorRepository.GetAuthorByIdAsync(id);
            currentAuthor.ChangeName(viewModel.FirstName, viewModel.LastName);
            await _authorRepository.UpdateAuthorAsync(currentAuthor, id);
            return Ok();
        }

        // DELETE api/values/5
        public async Task<IHttpActionResult> Delete(Guid id)
        {
            await _authorRepository.DeleteAuthorAsync(id);
            return Ok();
        }
    }
}
