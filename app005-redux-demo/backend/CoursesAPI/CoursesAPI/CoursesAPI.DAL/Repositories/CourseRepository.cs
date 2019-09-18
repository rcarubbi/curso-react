using CoursesAPI.Domain.Entities;
using CoursesAPI.Domain.Repositories;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoursesAPI.DAL.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        private MongoDB.Driver.IMongoCollection<Course> _context;

        public CourseRepository()
        {
            _context = ConnectionManager.GetContext().GetCollection<Course>("courses");
        }

        public async Task AddCourseAsync(Course course)
        {
            await _context.InsertOneAsync(course);
            
        }

        public async Task DeleteCourseAsync(Guid id)
        {
            await _context.DeleteOneAsync(c => c.Id == id);
        }

        public async Task<Course> GetCourseByIdAsync(Guid id)
        {
            var results = await _context.FindAsync(c => c.Id == id);
            return results.SingleOrDefault();
        }

        public async Task<IReadOnlyCollection<Course>> GetCoursesAsync()
        {
            var results = await _context.AsQueryable()
                 .ToListAsync();

            return results.AsReadOnly();
        }

        public async Task UpdateCourseAsync(Course course, Guid id)
        {   
            await _context.ReplaceOneAsync(c => c.Id == id, course);
        }
    }
}
