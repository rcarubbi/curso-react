using CoursesAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoursesAPI.Domain.Repositories
{
    public interface ICourseRepository
    {
        Task<IReadOnlyCollection<Course>> GetCoursesAsync();
        Task AddCourseAsync(Course course);

        Task UpdateCourseAsync(Course course, Guid id);

        Task DeleteCourseAsync(Guid id);
        Task<Course> GetCourseByIdAsync(Guid id);
    }
}
