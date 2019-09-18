using CoursesAPI.Domain.Entities;
using CoursesAPI.Domain.Repositories;
using CoursesAPI.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace CoursesAPI.Controllers
{
    public class CourseController : ApiController
    {
        private ICourseRepository _courseRepository;
        private IAuthorRepository _authorRepository;

        public CourseController(ICourseRepository courseRepository, IAuthorRepository authorRepository)
        {
            _courseRepository = courseRepository;
            _authorRepository = authorRepository;
        }
        // GET api/values
        public async Task<IEnumerable<Course>> Get()
        {
            return await _courseRepository.GetCoursesAsync();
        }

        // GET api/values/5
        public async Task<Course> Get(Guid id)
        {
            return await _courseRepository.GetCourseByIdAsync(id);
        }

        // POST api/values
        public async Task<IHttpActionResult> Post(CourseViewModel viewModel)
        {
            var author = await _authorRepository.GetAuthorByIdAsync(viewModel.AuthorId);
            if (author == null)
            {
                return BadRequest();
            }

            Course newCourse = new Course(viewModel.Title, viewModel.Length, author.Id);
            await _courseRepository.AddCourseAsync(newCourse);
            return Created($"{Request.RequestUri}/{newCourse.Id}", newCourse);
        }

        // PUT api/values/5
        public async Task<IHttpActionResult> Put(Guid id, CourseViewModel viewModel)
        {
            var course = await _courseRepository.GetCourseByIdAsync(id);
            var author = await _authorRepository.GetAuthorByIdAsync(viewModel.AuthorId);

            if (author == null)
            {
                return BadRequest();
            }
            course.ChangeDuration(viewModel.Length);
            course.Rename(viewModel.Title);
            course.ChangeAuthor(author.Id);

            await _courseRepository.UpdateCourseAsync(course, id);
            return Ok();
        }

        // DELETE api/values/5
        public async Task<IHttpActionResult> Delete(Guid id)
        {
            await _courseRepository.DeleteCourseAsync(id);
            return Ok();
        }
    }
}
